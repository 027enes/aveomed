document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".mySwiper", {
        effect: 'fade', // Geçiş efekti olarak fade kullanılır
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        on: {
            slideChangeTransitionStart: function() {
                const slides = document.querySelectorAll('.swiper-slide .slide-content');
                slides.forEach((slide) => {
                    slide.style.opacity = 0;
                    slide.style.transform = 'translateY(20px)';
                });
            },
            slideChangeTransitionEnd: function() {
                const activeSlide = document.querySelector('.swiper-slide-active .slide-content');
                activeSlide.style.opacity = 1;
                activeSlide.style.transform = 'translateY(0)';
            }
        }
    });

    var swiper = new Swiper(".homeReference", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

});

