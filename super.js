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







const galleryContainer = document.getElementById('galleryItemContainer');
let galleryItems = document.querySelectorAll('.gallery-item');
let isDragging = false;
let startX, scrollLeft;

// Duplicate the gallery items for the infinite effect
function duplicateItems() {
    galleryContainer.innerHTML += galleryContainer.innerHTML;
    galleryItems = document.querySelectorAll('.gallery-item'); // Update the NodeList
}

// Event listeners for dragging functionality
galleryContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - galleryContainer.offsetLeft;
    scrollLeft = galleryContainer.scrollLeft;
    galleryContainer.style.cursor = 'grabbing';
});

galleryContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    galleryContainer.style.cursor = 'grab';
});

galleryContainer.addEventListener('mouseup', () => {
    isDragging = false;
    galleryContainer.style.cursor = 'grab';
    updateHighlight();
});

galleryContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for speed
    galleryContainer.scrollLeft = scrollLeft - walk;

    if (galleryContainer.scrollLeft >= galleryContainer.scrollWidth / 2) {
        galleryContainer.scrollLeft -= galleryContainer.scrollWidth / 2;
    } else if (galleryContainer.scrollLeft <= 0) {
        galleryContainer.scrollLeft += galleryContainer.scrollWidth / 2;
    }

    updateHighlight();
});

// Function to update highlighted item based on scroll position
function updateHighlight() {
    const containerRect = galleryContainer.getBoundingClientRect();
    let closestItem = null;
    let minDistance = Infinity;

    galleryItems.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const distance = Math.abs(containerRect.left + containerRect.width / 2 - (itemRect.left + itemRect.width / 2));

        if (distance < minDistance) {
            minDistance = distance;
            closestItem = item;
        }

        // Calculate the scaling factor based on distance
        const scalingFactor = 1.2 - (distance / containerRect.width);
        item.style.transform = `scale(${Math.max(1, scalingFactor)})`;
    });

    highlightItem(closestItem);
}

// Function to highlight the specified item
function highlightItem(item) {
    galleryItems.forEach(galleryItem => galleryItem.classList.remove('main'));
    if (item) item.classList.add('main');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    duplicateItems(); // Duplicate items to enable infinite scrolling
    updateHighlight(); // Highlight the initial item
});





















// const galleryContainer = document.getElementById('galleryItemContainer');
// const galleryItems = document.querySelectorAll('.gallery-item');

// // Function to update highlighted item based on scroll position
// function updateHighlight() {
//     const containerRect = galleryContainer.getBoundingClientRect();
//     const items = Array.from(galleryItems);

//     let closestItem = null;
//     let minDistance = Infinity;

//     items.forEach(item => {
//         const itemRect = item.getBoundingClientRect();
//         const distance = Math.abs(containerRect.left + containerRect.width / 2 - (itemRect.left + itemRect.width / 2));

//         if (distance < minDistance) {
//             minDistance = distance;
//             closestItem = item;
//         }
//     });

//     highlightItem(closestItem);
// }

// // Function to highlight the specified item
// function highlightItem(item) {
//     galleryItems.forEach(galleryItem => galleryItem.classList.remove('main'));
//     item.classList.add('main');
// }

// // Event listener for scroll event
// galleryContainer.addEventListener('scroll', updateHighlight);

// // Initialize the highlight on page load
// document.addEventListener('DOMContentLoaded', () => {
//     updateHighlight(); // Highlight initial item if needed
// });



// const galleryContainer = document.getElementById('galleryItemContainer');
// const galleryItems = document.querySelectorAll('.gallery-item');

// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let animationID;
// let startIndex = 0;

// galleryItems.forEach((item, index) => {
//     item.addEventListener('mousedown', startDrag);
//     item.addEventListener('touchstart', startDrag);
    
//     item.addEventListener('mouseup', endDrag);
//     item.addEventListener('touchend', endDrag);
    
//     item.addEventListener('mousemove', drag);
//     item.addEventListener('touchmove', drag);
    
//     item.addEventListener('click', () => {
//         highlightItem(index);
//     });
// });

// function startDrag(event) {
//     isDragging = true;
//     startPos = getPositionX(event);
//     animationID = requestAnimationFrame(animation);
// }

// function endDrag() {
//     isDragging = false;
//     cancelAnimationFrame(animationID);
    
//     const movedBy = currentTranslate - prevTranslate;
    
//     if (movedBy < -100 && startIndex < galleryItems.length - 1) {
//         startIndex += 1;
//     } else if (movedBy > 100 && startIndex > 0) {
//         startIndex -= 1;
//     }
    
//     setPositionByIndex();
// }

// function drag(event) {
//     if (isDragging) {
//         const currentPosition = getPositionX(event);
//         currentTranslate = prevTranslate + currentPosition - startPos;
//     }
// }

// function getPositionX(event) {
//     return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
// }

// function animation() {
//     setSliderPosition();
//     if (isDragging) requestAnimationFrame(animation);
// }

// function setSliderPosition() {
//     galleryContainer.style.transform = `translateX(${currentTranslate}px)`;
//     checkOverflow();
// }

// function setPositionByIndex() {
//     currentTranslate = startIndex * -galleryItems[0].offsetWidth;
//     prevTranslate = currentTranslate;
//     setSliderPosition();
    
//     highlightItem(startIndex);
// }

// function checkOverflow() {
//     // When the gallery scrolls to the end, reset the position
//     if (galleryContainer.scrollLeft >= galleryContainer.scrollWidth - galleryContainer.clientWidth) {
//         galleryContainer.scrollLeft = 0;
//     }
//     if (galleryContainer.scrollLeft <= 0) {
//         galleryContainer.scrollLeft = galleryContainer.scrollWidth - galleryContainer.clientWidth;
//     }
// }

// function highlightItem(index) {
//     galleryItems.forEach(item => item.classList.remove('main'));
//     galleryItems[index].classList.add('main');
    
//     // Optionally adjust the size and border of the new main item
//     galleryItems.forEach(item => {
//         item.style.flex = '0 0 350px';
//         item.style.height = '400px';
//         item.style.border = 'none';
//     });

//     galleryItems[index].style.flex = '0 0 400px';
//     galleryItems[index].style.height = '500px';
//     galleryItems[index].style.border = '5px solid #fff';
// }
