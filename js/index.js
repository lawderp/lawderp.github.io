

/*********************** Header scroll logic ****************************/
window.onscroll = function() {
    var header = document.querySelector('.header');
    var headerLogo = document.querySelector('.logo-header');
    var links = document.querySelectorAll("li > a");
    if (window.scrollY > 55) {
        header.classList.add('scrolled-header');
        headerLogo.classList.add('scrolled-logo-header');
        for (i=0; i<links.length; i++) {
            links[i].classList.add('scrolled-link');
        }
    } else {
        header.classList.remove('scrolled-header');
        headerLogo.classList.remove('scrolled-logo-header');
        // headerLogo.style.opacity = 0;

        for (i=0; i<links.length; i++) {
            links[i].classList.remove('scrolled-link');
        }
    }
  }


/******** hamburger logic *********/
function mobileMenu() {
    var nav = document.querySelector(".navigation");
    var header = document.querySelector('.header');
    console.log(nav);
    if (nav.className === "navigation") {
        header.style.background = "white";
        nav.className += " open";
    } else {
        nav.className = "navigation";
        header.style.background = "";
    }
}

/**** switching parallax for mobile ****/


function isMobile() {
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches) {
        mobileMenu();
    }
}




/************ parallax logic ************* */
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};
 
var heroFrame = document.querySelector('.hero-frame');
var imageFrame = document.querySelector('.image-frame');
// var bubble2 = document.getElementById('bubbles2');
 
function parallax() {
    var scrolltop = window.pageYOffset; 
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches) {
        imageFrame.style.top = 0 + (scrolltop * .3) + 'px';
    } else {
        heroFrame.style.top = 0 + (scrolltop * .18) + 'px';
    }
}
 
window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallax) // call parallaxbubbles() on next available screen paint
}, false);



/*********************** Slider logic ****************************/
const slider = document.querySelector(".slider");
const price = document.querySelector(".price");
const discount = document.querySelector(".discount");
const fee = document.querySelector(".fee");
const savings = document.querySelector(".savings");

// price.innerHTML = "$" + slider.value.toLocaleString(); // Display the default slider value
price.innerHTML = "$500,000";


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    const rounded = Math.round(this.value/5000)*5000;
    price.innerHTML = "$" + rounded.toLocaleString();
    discount.innerHTML = "$" + Math.round(rounded*0.05).toLocaleString();
    fee.innerHTML = "$" + Math.round(rounded*0.0195).toLocaleString();
    savings.innerHTML = "$" + Math.round(rounded*0.0305).toLocaleString();

}