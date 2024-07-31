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
    var swiper = new Swiper(".detailsSwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    var swiper = new Swiper(".relatedSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
    });

});

