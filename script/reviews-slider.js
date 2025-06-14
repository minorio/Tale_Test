document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.reviews__slides-container'); 
    const slides = document.querySelectorAll('.reviews__slide');
    const dots = document.querySelectorAll('.reviews__dot');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let current = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        current = index;

        slidesContainer.style.transform = `translateX(-${current * 100}%)`; 

        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === current);
        });

        slides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === current);
        });
    }

    prevBtn.addEventListener('click', () => {
        showSlide(current - 1); 
    });

    nextBtn.addEventListener('click', () => {
        showSlide(current + 1); 
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(current);
});
