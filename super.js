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





document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 2.3,
        focusAt: '0',
        gap: 20,
        peek: {
            before: 40,
            after: 0
          }
    });

    glide.mount();

    // Function to update the background, button color, header, and description
    function updateSlideContent() {
        const currentSlide = document.querySelector('.glide__slide--active');

        if (currentSlide) {
            const backgroundImage = currentSlide.getAttribute('data-bg');
            const buttonColor = currentSlide.getAttribute('data-button-color');
            const headerText = currentSlide.getAttribute('data-header');
            const descriptionText = currentSlide.getAttribute('data-description');

            document.querySelector('.body').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.904)), ${backgroundImage}`;
            document.getElementById('exploreButton').style.backgroundColor = buttonColor;
            document.getElementById('headerText').innerText = headerText;
            document.getElementById('descriptionText').innerText = descriptionText;
        }
    }

    // Update content when the glide index changes
    glide.on('run.after', function () {
        updateSlideContent();
    });

    // Initial activation of the first slide
    updateSlideContent();
});




// var carousel = (function () {
//     var activeID = 0,
//       itemW = 940,
//       carouselItems = document.querySelector(".carousel_items"),
//       carouselItem = document.querySelectorAll(".carousel_item"),
//       arrowPrev = document.querySelector(".item_prev"),
//       arrowNext = document.querySelector(".item_next"),
//       itemArrow = document.querySelectorAll(".item_arrow"),
//       navDots = document.querySelector(".nav_dots"),
//       navDot,
//       carouselCount = carouselItem.length,
//       slideSpeed = 450, // speed in milliseconds
//       slideMeth = 'ease-in-out', // easing method
//       swipeDir;
  
//     function init() {
//       carouselItems.style.width = itemW * carouselCount + "px";
//       navDots.style.width = 25 * carouselCount + "px";
  
//       setupDraggable();
//       setupDots();
//       navigateSlide();
//     }
//     init();
  
//     function setupDraggable() {
//         let startX, endX, currentX, moveX, isDragging = false;
      
//         // Handle mouse down and touch start events
//         carouselItems.addEventListener("mousedown", startDrag);
//         carouselItems.addEventListener("touchstart", startDrag);
      
//         // Handle mouse move and touch move events
//         carouselItems.addEventListener("mousemove", drag);
//         carouselItems.addEventListener("touchmove", drag);
      
//         // Handle mouse up and touch end events
//         carouselItems.addEventListener("mouseup", endDrag);
//         carouselItems.addEventListener("touchend", endDrag);
//         carouselItems.addEventListener("mouseleave", endDrag);
      
//         function startDrag(evt) {
//           isDragging = true;
//           startX = evt.type === "touchstart" ? evt.touches[0].clientX : evt.clientX;
//           currentX = carouselItems.style.transform ? parseInt(carouselItems.style.transform.split('(')[1].split('px')[0]) : 0;
//           carouselItems.style.transition = 'none';  // Disable smooth transition during dragging
//         }
      
//         function drag(evt) {
//           if (!isDragging) return;
      
//           moveX = evt.type === "touchmove" ? evt.touches[0].clientX - startX : evt.clientX - startX;
//           carouselItems.style.transform = `translateX(${currentX + moveX}px)`;
//         }
      
//         function endDrag(evt) {
//           if (!isDragging) return;
//           endX = evt.type === "touchend" ? evt.changedTouches[0].clientX : evt.clientX;
//           isDragging = false;
          
//           swipeDir = startX > endX ? "left" : "right";
//           if (swipeDir === "left") {
//             activeID++;
//           } else if (swipeDir === "right") {
//             activeID--;
//           }
      
//           navigateSlide();
//         }
//       }
      
  
//     function setupDots() {
//       for (var i = 0; i < carouselCount; i++) {
//         var dot = document.createElement("div");
//         dot.className = "nav_dot";
//         dot.id = "dot_" + i;
//         navDots.appendChild(dot);
//       }
//       navDot = document.querySelectorAll(".nav_dot");
//     }
  
//     function navigateSlide() {
//       if (activeID >= carouselCount - 1) activeID = carouselCount - 1;
//       if (activeID <= 0) activeID = 0;
  
//       var xTarget = activeID * itemW * -1;
  
//       carouselItems.style.transition = `transform ${slideSpeed}ms ${slideMeth}`;
//       carouselItems.style.transform = `translateX(${xTarget}px)`;
  
//       slideDone();
//     }
  
//     function slideDone() {
//       navDot.forEach(dot => {
//         dot.style.backgroundColor = "#fff";
//         dot.style.transform = "scale(1)";
//       });
  
//       document.getElementById("dot_" + activeID).style.backgroundColor = "transparent";
//       document.getElementById("dot_" + activeID).style.transform = "scale(1.5)";
  
//       if (activeID === 0) {
//         arrowPrev.style.display = "none";
//       } else {
//         arrowPrev.style.display = "block";
//       }
  
//       if (activeID + 1 === carouselCount) {
//         arrowNext.style.display = "none";
//       } else {
//         arrowNext.style.display = "block";
//       }
//     }
  
//     itemArrow.forEach(function (arrow) {
//       arrow.addEventListener("click", function () {
//         if (arrow.classList.contains("item_next")) {
//           activeID++;
//         } else {
//           activeID--;
//         }
  
//         navigateSlide();
//       });
//     });
  
//     navDot.forEach(function (dot) {
//       dot.addEventListener("click", function () {
//         activeID = parseInt(dot.id.split("_")[1]);
//         navigateSlide();
//       });
  
//       dot.addEventListener("mouseenter", function () {
//         dot.style.transform = "scale(1.5)";
//       });
  
//       dot.addEventListener("mouseleave", function () {
//         if (parseInt(dot.id.split("_")[1]) !== activeID) {
//           dot.style.transform = "scale(1)";
//         }
//       });
//     });
  
//     carouselItem.forEach(function (item) {
//       item.addEventListener("mousedown", function () {
//         activeID = parseInt(item.id.split("_")[1]);
//         item.classList.remove("grab");
//         item.classList.add("grabbing");
//       });
  
//       item.addEventListener("mouseenter", function () {
//         item.classList.remove("grabbing");
//         item.classList.add("grab");
//       });
  
//       item.addEventListener("mouseup", function () {
//         item.classList.remove("grabbing");
//         item.classList.add("grab");
//       });
//     });
//   })();
  