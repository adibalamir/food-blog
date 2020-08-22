// Show menu toggle of Homepage
const menu = document.querySelector('#showMenu');
const listLink = document.querySelector('#toggleMenu');
const hideBar = document.querySelector('#hideBar');
const rotateBar1 = document.querySelector('#rotateBar-1');
const rotateBar2 = document.querySelector('#rotateBar-2');

if (menu) {
    menu.addEventListener('click', (e) => {
        listLink.classList.toggle('show-menu');
        hideBar.classList.toggle('hide-bar');
        rotateBar1.classList.toggle('rotate-bar-1');
        rotateBar2.classList.toggle('rotate-bar-2');
    });
}

// Scroll to top button

// // When the user scrolls down 20px from the top of the document,we will show the button
// window.onscroll = function () {
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         document.querySelector("#scroll-btn").style.display = "block";
//     }
//     else {
//         document.querySelector("#scroll-btn").style.display = "none";
//     }
// };

// function scrollToTop() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }





// Set a variable for button scroll to top
const scrollToTopButton = document.querySelector('#scroll-btn');

// Set up a function if the window scroll down to height 500px then show button 
const showButton = () => {
    // Get the current scroll value
    const windowHeight = window.scrollY;

    // If the scroll value is greater than the window height, add style inline-css in button 
    if (windowHeight > 500) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Add event scroll
window.addEventListener("scroll", showButton);

// Setup a function with animate scroll to top slower
const scrollToTop = () => {

    // Set a variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        // ScrollTo takes an x and a y coordinate.
        // Increase the '12' value to get a smoother/slower scroll
        window.scrollTo(0, c - c / 12);
    }
};

// When the button is clicked, run our ScrollToTop function
scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
}