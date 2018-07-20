/*********************** Header scroll logic ****************************/
window.onscroll = function() {
    var header = document.querySelector('.header');
    var links = document.querySelectorAll("li > a");
    if (window.scrollY > 55) {
        header.classList.add('scrolled-header');
        for (i=0; i<links.length; i++) {
            links[i].classList.add('scrolled-link');
        }
    } else {
        header.classList.remove('scrolled-header');
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

function isMobile() {
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches) {
        mobileMenu();
    }
}




/********************* FAQ accordion logic ****************/

// declare variables

var d = document;
accordionToggles = d.querySelectorAll('.accordion-trigger');
accordionHeaders = d.querySelectorAll('.faq-question');

touchSupported = ('ontouchstart' in window);
pointerSupported = ('pointerdown' in window);

// converter to normal click events -> switchAccordion
skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
}

// switch accordion
switchAccordion = function(e) {
    e.preventDefault();
    clickTarget = e.target;

    // check if clicked on H4 or Chevron directly
    if (clickTarget.nodeName === "H4" || clickTarget.nodeName === "IMG") {
        clickTarget = clickTarget.parentNode.parentNode;
        console.log(clickTarget);
    }

    var thisAnswer = clickTarget.querySelector('.faq-answer');
    var thisQuestion = clickTarget.querySelector('.faq-question');

    var answerHeight = thisAnswer.scrollHeight;
    console.log("the scroll height is " + answerHeight);
    // console.log("the parent height is " + (answerHeight + thisQuestion.scrollHeight));

    if (clickTarget.classList.contains('collapsed')) {
        thisAnswer.style.maxHeight = answerHeight + "px";
        clickTarget.classList.remove('collapsed');
        clickTarget.classList.add('expanded');
    } else {
        thisAnswer.style.maxHeight = 0 + "px";
        clickTarget.classList.add('collapsed');
        clickTarget.classList.remove('expanded');
    }    
}


// for every question title (a), add necessary click events
for (var i=0, len=accordionToggles.length; i<len; i++) {
    
    accordionToggles[i].addEventListener('click', switchAccordion, false);
    // if (touchSupported) {
    //     accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    // } else if(pointerSupported) {
    //     accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    // } else {
    //     accordionToggles[i].addEventListener('click', switchAccordion, false);
    // }
}

