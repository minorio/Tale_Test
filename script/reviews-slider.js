// document.addEventListener('DOMContentLoaded', () => {
//     const slides = document.querySelectorAll('.reviews__slide');
//     const dots = document.querySelectorAll('.reviews__dot');
//     const prevBtn = document.getElementById('prev');
//     const nextBtn = document.getElementById('next');
//
//     let current = 0;
//
//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.classList.toggle('is-active', i === index);
//         });
//
//         dots.forEach((dot, i) => {
//             dot.classList.toggle('is-active', i === index);
//         });
//     }
//
//     prevBtn.addEventListener('click', () => {
//         current = (current - 1 + slides.length) % slides.length;
//         showSlide(current);
//     });
//
//     nextBtn.addEventListener('click', () => {
//         current = (current + 1) % slides.length;
//         showSlide(current);
//     });
//
//     showSlide(current);
// });

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.reviews__slides-container'); // ИЗМЕНЕНО
    const slides = document.querySelectorAll('.reviews__slide');
    const dots = document.querySelectorAll('.reviews__dot');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let current = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        // Убедимся, что индекс находится в допустимых пределах
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        current = index;

        // Перемещаем контейнер слайдов
        slidesContainer.style.transform = `translateX(-${current * 100}%)`; // ИЗМЕНЕНО

        // Обновляем активные точки пагинации
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === current);
        });

        // Убираем/добавляем is-active со слайдов, чтобы корректно работали стили display: flex на мобильных
        slides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === current);
        });
    }

    prevBtn.addEventListener('click', () => {
        showSlide(current - 1); // ИЗМЕНЕНО
    });

    nextBtn.addEventListener('click', () => {
        showSlide(current + 1); // ИЗМЕНЕНО
    });

    // Обработчики кликов по точкам пагинации
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Инициализация первого слайда
    showSlide(current);
});
