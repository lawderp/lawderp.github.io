

/*********************** Header scroll logic ****************************/
window.onscroll = function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 55) {
      header.classList.add('scrolled-header');
    } else {
      header.classList.remove('scrolled-header');
    }
  }


/************ parallax logic ************* */
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};
 
var cashBenefits = document.querySelector('.cash-benefits');
// var bubble2 = document.getElementById('bubbles2');
 
function parallax() {
    var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
    cashBenefits.style.bottom = -280 + (scrolltop * .2) + 'px'; // move bubble1 at 20% of scroll rate
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