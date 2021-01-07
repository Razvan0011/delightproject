const toggle = document.getElementById("toggle");
const toggleWhite = document.getElementById("toggle-white");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const side = document.querySelector("side-menu");
const itemH = document.querySelector(".item");

// itemH.addEventListener("mouseover", (e) => {
//     console.log("Mouse over");
//     document.querySelector(".middle-text").style.dysplay = "none";
// });



// Toggle navigation
toggle.addEventListener("click", (e) => {
    // document.body.classList.toggle("show-nav");
    modal.classList.remove("close-modal");
    modal.classList.add("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

toggleWhite.addEventListener("click", (e) => {
    // document.body.classList.toggle("show-nav");
    modal.classList.remove("close-modal");
    modal.classList.add("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

modal.addEventListener("click", () => {
    modal.classList.remove("show-modal");
    // adding the close modal with fade out animation
    modal.classList.add("close-modal");
    // Remove the close-modal class after 0.3s (right after the animation ends) otherwise it will remain on top and z-index will create a bug
    setTimeout(function () {
        modal.classList.remove("close-modal");
    }, 300);
    // modal.classList.remove("close-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

close.addEventListener("click", () => {
    modal.classList.remove("show-modal");
    // adding the close modal with fade out animation
    modal.classList.add("close-modal");
    // Remove the close-modal class after 0.3s (right after the animation ends) otherwise it will remain on top and z-index will create a bug
    setTimeout(function () {
        modal.classList.remove("close-modal");
    }, 300);
    document.getElementById("sidebar").classList.toggle("show-nav");
});

// Sticky menu background
// window.addEventListener('scroll', function () {
//     if (window.scrollY > 210) {
//         document.querySelector('#sticky-nav').style.display = "block";
//     } else if (window.scrollY < 210) {
//         document.querySelector('#sticky-nav').style.display = "none";
//     }
// });

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("sticky-nav").style.top = "0";
    } else {
        document.getElementById("sticky-nav").style.top = "-100px";
    }
}

// Smoot Scrolling
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                    scrollTop: $(hash).offset().top - 90
                }, 800
                // function () {

                //     // Add hash (#) to URL when done scrolling (default click behavior)
                //     window.location.hash = hash;
                // }
            );
        } // End if
    });
});


// Slider ------------------------------------------------------------
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 5000;

let slides = document.querySelectorAll(".slide");
let index = 0;
let slideId;
let pos = 0;

const slideWidth = slides[index].clientWidth / 3;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

// Function that starts the slide and calls the next button function and it takes the interval variable for its period
const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval)
};

const getSlides = () => document.querySelectorAll(".slide");

// Move to next slide button
const moveToNextSlide = () => {
    slides = getSlides();
    pos++;
    // console.log("pos is: ", pos);
    // Clear the curront dot button of its selected color
    clearCurrBtn();
    // Set the current button color
    currButton();

    if (pos >= 4) {
        index = -1;
        pos = 0;
        // Clear the curront dot button of its selected color
        clearCurrBtn();
        // Set the current button color
        currButton();
    }
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = ".7s";
}

// Move to previous side button
const moveToPreviousSlide = () => {
    slides = getSlides();
    pos--;
    // console.log("pos is: ", pos);
    // Clear the curront dot button of its selected color
    clearCurrBtn();
    // Set the current button color
    currButton();
    if (pos < 0) {
        index = 4;
        pos = 3;
        // Clear the current dot button of its selected color
        clearCurrBtn();
        // Set the current button color
        currButton();
    }
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = ".7s";
}

// When hovering over the carousel the slide action will stop
slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
});

// After leaving the carousel area the slide will start moving again
slideContainer.addEventListener("mouseleave", startSlide);

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);
startSlide();

// dot buttons array
const dotButtons = document.querySelectorAll(".dot");
let colorDotBtn = "rgba(255, 255, 255, 0.384)";
let hoverDotBtn = "rgb(255, 255, 255)";

// Sets current dot button color
const currButton = () => {
    // console.log(dotButtons[0].style);
    // dotButtons[pos].style.background = "black";
    if (pos >= 0 && pos < 4) {
        dotButtons[pos].style.background = hoverDotBtn;
        dotButtons[pos].classList.toggle("curr");
    }
}
// Clear all dot buttons of current color
const clearCurrBtn = () => {
    dotButtons.forEach(element => {
        element.style.background = colorDotBtn
        element.classList.remove("curr");
    });
}

// calling the current button class so that the first dot will be selected before calling the next button
currButton();

// Dots hover state
(() => {
    dotButtons.forEach(elem => {
        elem.addEventListener("mouseenter", (e) => {
            e.target.style.background = "white";
        });
        elem.addEventListener("mouseleave", (e) => {
            if (!elem.classList.contains("curr")) {
                e.target.style.background = colorDotBtn;
            }
        });
    })
})();

// When clicking on a dot it will go to that position
(() => {
    for (let i = 0; i < dotButtons.length; i++) {
        dotButtons[i].addEventListener("click", () => {
            if (i > pos) {
                pos = i - 1;
                index = i - 1;
                moveToNextSlide();
            }
            if (i < pos) {
                pos = i + 1;
                index = i + 1;
                moveToPreviousSlide();
            };
        });
    }
})();


// Enf of slider--------------------------------------------------------

// Partners scroll--------------------------------------------------
(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

$(window).scroll(function (event) {

    $(".partner.item").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});

var win = $(window);
var allMods = $(".partner-item");

// Already visible modules
allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});

// Jobs click ******************************************************

// Creating an array containing job-items
const jobs = document.querySelectorAll(".job-item");

(() => {
    jobs.forEach(el => {
        // console.log(el);
        el.addEventListener("click", () => {
            const tgt = el;
            const firstChild = tgt.firstElementChild;

            if (tgt.classList.contains("none")) {
                tgt.classList.toggle("blue");
                tgt.classList.remove("none");
                // this adds the top left circle
                firstChild.style.visibility = "inherit";
                // set the value of the circle
                firstChild.textContent = "1";
            } else if (tgt.classList.contains("blue")) {
                tgt.classList.toggle("yellow");
                tgt.classList.remove("blue");
                // set the value of the circle
                firstChild.textContent = "2";
            } else if (tgt.classList.contains("yellow")) {
                tgt.classList.toggle("green");
                tgt.classList.remove("yellow");
                // set the value of the circle
                firstChild.textContent = "3";
            } else if (tgt.classList.contains("green")) {
                tgt.classList.toggle("none");
                tgt.classList.remove("green");
                // this removes the top left circle
                firstChild.style.visibility = "hidden";
            }
        });
    });
})();

// I'll keep a copy of this just in case I'll have to use it later, if not I'll delete it when I'm done
// function changeColor() {
//     let tgt = Array.prototype;

//     if (tgt.classList.contains("none")) {
//         tgt.classList.toggle("blue");
//         tgt.classList.remove("none");
//     } else if (tgt.classList.contains("blue")) {
//         tgt.classList.toggle("yellow");
//         tgt.classList.remove("blue");
//     } else if (tgt.classList.contains("yellow")) {
//         tgt.classList.toggle("green");
//         tgt.classList.remove("yellow");
//     } else if (tgt.classList.contains("green")) {
//         tgt.classList.toggle("none");
//         tgt.classList.remove("green");
//     }
// }

// Green Dot Change Color + Text
const circle = document.getElementById("circle");

circle.addEventListener("click", (e) => {

    // checks if the default state is present (which is the light GREEN color)
    if (circle.classList.contains("green-state")) {
        // console.log(circle);
        // if true adds the PINK color to the circle and span
        addColorState(circle, "pink-state", "imagine", "sp1");
        // removes the default state class so it can continue changing colors
        circle.classList.remove("green-state");
    }
    // checks if the PINK color is present
    else if (circle.classList.contains("pink-state")) {
        // console.log(circle);
        // if pink is present it will add BLUE to circle
        addColorState(circle, "blue-state", "innovate", "sp2");
        circle.classList.remove("pink-state");
    }
    // checks if the BLUE color is present
    else if (circle.classList.contains("blue-state")) {
        // console.log(circle);
        // if blue is presnet it will add the ORANGE color
        addColorState(circle, "orange-state", "create", "sp3");
        circle.classList.remove("blue-state");
    }
    // checks if the ORANGE color is presnet 
    else if (circle.classList.contains("orange-state")) {
        // console.log(circle);
        // if orange is present it will add the PURPLE color
        addColorState(circle, "purple-state", "the future", "sp4");
        circle.classList.remove("orange-state");
    }
    // checks if the PURPLE color is presnet 
    else if (circle.classList.contains("purple-state")) {
        // console.log(circle);
        // if orange is presnet it will add the PURPLE color
        addColorState(circle, "final-state", "", "");
        circle.classList.remove("purple-state");
    }

});

function addColorState(target, state, text, idSpan) {
    // adds class to target
    target.classList.add(state);
    // adds text to target
    target.textContent = text;
    // adds color to span
    try {
        document.getElementById(idSpan).classList.add(state);
    } catch (e) {
        // console.log("No id");
    }
}