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
    modal.classList.add("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

toggleWhite.addEventListener("click", (e) => {
    // document.body.classList.toggle("show-nav");
    modal.classList.add("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

modal.addEventListener("click", () => {
    modal.classList.remove("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

close.addEventListener("click", () => {
    modal.classList.remove("show-modal");
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


// Slider
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 300000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth / 3;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval)
};

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
    slides = getSlides();
    console.log("transition");
    if (slides[index].id === firstClone.id) {
        slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if (slides[index].id === lastClone.id) {
        slide.style.transition = "none";
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) {
        return;
    }
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = ".7s";
}

const moveToPreviousSlide = () => {
    slides = getSlides();
    if (index <= 0) {
        return;
    }
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = ".7s";
}

slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);
startSlide();



// New backup for MODAL


// Toggle navigation
toggle.addEventListener("click", (e) => {
    // document.body.classList.toggle("show-nav");
    modal.classList.add("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

toggleWhite.addEventListener("click", (e) => {
    // document.body.classList.toggle("show-nav");
    modal.classList.add("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

modal.addEventListener("click", () => {
    modal.classList.remove("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});

close.addEventListener("click", () => {
    modal.classList.remove("show-modal");
    document.getElementById("sidebar").classList.toggle("show-nav");
});