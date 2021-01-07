const slideContainer3 = document.querySelector(".day-container");
const slide3 = document.querySelector(".slides-day");
const nextBtn3 = document.getElementById("next-day-btn");
const prevBtn3 = document.getElementById("prev-day-btn");


let slides3 = document.querySelectorAll(".slide-day");
let index3 = 0;
let slideId3;
let pos3 = 0;

const slideWidth3 = slides3[index3].clientWidth;

slide3.style.transform = `translateX(${-slideWidth3 * index3}px)`;

const getSlides3 = () => document.querySelectorAll(".slide-day");

const moveToNextSlide3 = () => {
    slides3 = getSlides3();
    pos3++;

    if (pos3 >= 3) {
        index3 = -1;
        pos3 = 0;
    }
    index3++;
    slide3.style.transform = `translateX(${-slideWidth3 * index3}px)`;
    slide3.style.transition = ".7s";
}

// Move to previous side button
const moveToPreviousSlide3 = () => {
    slides3 = getSlides3();
    pos3--;
    // currButton3();
    if (pos3 < 0) {
        index3 = 3;
        pos3 = 2;
    }
    index3--;
    slide3.style.transform = `translateX(${-slideWidth3 * index3}px)`;
    slide3.style.transition = ".7s";
}

nextBtn3.addEventListener("click", moveToNextSlide3);
prevBtn3.addEventListener("click", moveToPreviousSlide3);
// startSlide3();


// Video play button
const playBtn1 = document.getElementById("play-button1");
const playBtn2 = document.getElementById("play-button2");
const playBtn3 = document.getElementById("play-button3");
const ctrlVideo = document.getElementById("video1");

playBtn1.addEventListener("click", (e) => {
    e.target.style.display = "none";
    slides3[index3].firstElementChild.controls = true;
    slides3[index3].firstElementChild.play();
});
playBtn2.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    slides3[index3].firstElementChild.controls = true;
    slides3[index3].firstElementChild.play();
});
playBtn3.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    slides3[index3].firstElementChild.controls = true;
    slides3[index3].firstElementChild.play();
});