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
const galleryItems = document.querySelectorAll('.gallery-item');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let startIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('mousedown', startDrag);
    item.addEventListener('touchstart', startDrag);
    
    item.addEventListener('mouseup', endDrag);
    item.addEventListener('touchend', endDrag);
    
    item.addEventListener('mousemove', drag);
    item.addEventListener('touchmove', drag);
    
    item.addEventListener('click', () => {
        highlightItem(index);
    });
});

function startDrag(event) {
    isDragging = true;
    startPos = getPositionX(event);
    animationID = requestAnimationFrame(animation);
}

function endDrag() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -100 && startIndex < galleryItems.length - 1) {
        startIndex += 1;
    } else if (movedBy > 100 && startIndex > 0) {
        startIndex -= 1;
    }
    
    setPositionByIndex();
}

function drag(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    galleryContainer.style.transform = `translateX(${currentTranslate}px)`;
    checkOverflow();
}

function setPositionByIndex() {
    currentTranslate = startIndex * -galleryItems[0].offsetWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    
    highlightItem(startIndex);
}

function checkOverflow() {
    // When the gallery scrolls to the end, reset the position
    if (galleryContainer.scrollLeft >= galleryContainer.scrollWidth - galleryContainer.clientWidth) {
        galleryContainer.scrollLeft = 0;
    }
    if (galleryContainer.scrollLeft <= 0) {
        galleryContainer.scrollLeft = galleryContainer.scrollWidth - galleryContainer.clientWidth;
    }
}

function highlightItem(index) {
    galleryItems.forEach(item => item.classList.remove('main'));
    galleryItems[index].classList.add('main');
    
    // Optionally adjust the size and border of the new main item
    galleryItems.forEach(item => {
        item.style.flex = '0 0 350px';
        item.style.height = '400px';
        item.style.border = 'none';
    });

    galleryItems[index].style.flex = '0 0 400px';
    galleryItems[index].style.height = '500px';
    galleryItems[index].style.border = '5px solid #fff';
}
