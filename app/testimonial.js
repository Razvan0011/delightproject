const slideContainer2 = document.querySelector(".testimonial-container");
const slide2 = document.querySelector(".slides-test");
const nextBtn2 = document.getElementById("next-test-btn");
const prevBtn2 = document.getElementById("prev-test-btn");
const interval2 = 23000;

let slides2 = document.querySelectorAll(".slide-test");
let index2 = 0;
let slideId2;
let pos2 = 0;

const slideWidth2 = slides2[index2].clientWidth;

slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;


const startSlide2 = () => {
    slideId2 = setInterval(() => {
        moveToNextSlide2();
    }, interval2)
};

const getSlides2 = () => document.querySelectorAll(".slide-test");

const moveToNextSlide2 = () => {
    slides2 = getSlides2();
    pos2++;
    // console.log("index is: ", index2);
    // console.log("pos is: ", pos2);
    // Clear the curront dot button of its selected color
    clearCurrBtn2();
    // Set the current button color
    currButton2();

    if (pos2 >= 6) {
        index2 = -1;
        pos2 = 0;
        // Clear the curront dot button of its selected color
        clearCurrBtn2();
        // Set the current button color
        currButton2();
    }
    index2++;
    slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
    slide2.style.transition = ".7s";
}

// Move to previous side button
const moveToPreviousSlide2 = () => {
    slides2 = getSlides2();
    pos2--;
    // console.log("index is: ", index2);
    // console.log("pos is: ", pos2);
    // Clear the curront dot button of its selected color
    clearCurrBtn2();
    // Set the current button color
    currButton2();
    if (pos2 < 0) {
        index2 = 6;
        pos2 = 5;
        // Clear the current dot button of its selected color
        clearCurrBtn2();
        // Set the current button color
        currButton2();
    }
    index2--;
    slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
    slide2.style.transition = ".7s";
}

// When hovering over the carousel the slide action will stop
slideContainer2.addEventListener("mouseenter", () => {
    clearInterval(slideId2);
});

// After leaving the carousel area the slide will start moving again
slideContainer2.addEventListener("mouseleave", startSlide2);

nextBtn2.addEventListener("click", moveToNextSlide2);
prevBtn2.addEventListener("click", moveToPreviousSlide2);
startSlide2();

const dotButtons2 = document.querySelectorAll(".dot-test");
let colorDotBtn2 = "#666";
let hoverDotBtn2 = "rgb(0, 0, 0)";

// Sets current dot button color
const currButton2 = () => {
    // console.log(dotButtons[0].style);
    // dotButtons[pos].style.background = "black";
    if (pos2 >= 0 && pos2 < 6) {
        dotButtons2[pos2].style.background = hoverDotBtn2;
        dotButtons2[pos2].classList.toggle("curr");
    }
}

// Clear all dot buttons of current color
const clearCurrBtn2 = () => {
    dotButtons2.forEach(element => {
        element.style.background = colorDotBtn2;
        element.classList.remove("curr");
    });
}

// calling the current button class so that the first dot will be selected before calling the next button
currButton2();

// Dots hover state
(() => {
    dotButtons2.forEach(elem => {
        elem.addEventListener("mouseenter", (e) => {
            e.target.style.background = "black";
        });
        elem.addEventListener("mouseleave", (e) => {
            if (!elem.classList.contains("curr")) {
                e.target.style.background = "#666";
            }
        });
    })
})();

// When clicking on a dot it will go to that position
(() => {
    for (let i = 0; i < dotButtons2.length; i++) {
        dotButtons2[i].addEventListener("click", () => {
            if (i > pos2) {
                pos2 = i - 1;
                index2 = i - 1;
                moveToNextSlide2();
            }
            if (i < pos2) {
                pos2 = i + 1;
                index2 = i + 1;
                moveToPreviousSlide2();
            };
        });
    }
})();