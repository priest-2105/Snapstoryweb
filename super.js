const hamburgerToggle_div = document.getElementById('hamburgerToggle');
const navList_Div = document.getElementById('navList')
const closeMenu_B = document.getElementById('closeMenu');
const galleryItem_Div = document.getElementById('galleryItem');
const galleryItemContainer_Div = document.getElementById('galleryItemContainer');


closeMenu_B.addEventListener('click', () => {

    navList_Div.classList.toggle('show');
    
});

hamburgerToggle_div.addEventListener('click', () => {

    navList_Div.classList.toggle('show');
    
});




let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');
let cards = document.querySelectorAll('.card');

let cardWidth = cards[0].offsetWidth + 20; // Include the gap between cards
let currentIndex = 0;

// Function to go to the next slide
const goToNext = () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first card
    }
    updateSliderPosition();
};

// Function to go to the previous slide
const goToPrev = () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1; // Loop back to the last card
    }
    updateSliderPosition();
};

// Function to update the slider position based on the current index
const updateSliderPosition = () => {
    innerSlider.style.left = `-${currentIndex * cardWidth}px`;
    scaleCards();
};

// Function to scale the current card
const scaleCards = () => {
    cards.forEach(card => {
        card.classList.remove('main');
    });
    
    // Smoothly scale the current card
    setTimeout(() => {
        cards[currentIndex].classList.add('main');
    }, 100);
};

// Attach event listeners to buttons
document.getElementById('nextBtn').addEventListener('click', goToNext);
document.getElementById('prevBtn').addEventListener('click', goToPrev);

// Initialize the first card as "main"
scaleCards();
