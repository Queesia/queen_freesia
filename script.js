window.onload = function () {
    let slideIndex = 1;
    showSlide(slideIndex);

    document.getElementById("prev").addEventListener("click", function () {
        changeSlide(-1);
    });

    document.getElementById("next").addEventListener("click", function () {
        changeSlide(1);
    });

    document.querySelectorAll(".dot").forEach(function (dot) {
        dot.addEventListener("click", function () {
            let index = parseInt(this.getAttribute("data-value"));
            currentSlide(index);
        });
    });

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let slides = document.querySelectorAll(".slide__item");
        let dots = document.querySelectorAll(".dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(function (slide, index) {
            slide.style.display = "none";
            dots[index].classList.remove("active");
        });
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }
};