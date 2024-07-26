document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const aboutUsTitle = document.querySelector(".about-us-title");
    if (aboutUsTitle) {
        const chars = aboutUsTitle.textContent.split("").map(char => `<span>${char}</span>`).join("");
        aboutUsTitle.innerHTML = chars;

        gsap.from(aboutUsTitle.querySelectorAll("span"), {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power4.out",
            scrollTrigger: {
                trigger: aboutUsTitle,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            stagger: 0.05 // Her harf arası animasyon gecikmesi
        });
    }

    gsap.from(".about-us-img-one", {
        x: -200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about-us-img-two", {
        x: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".years", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".years-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about-us-text-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about-us-button", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    const productTitle = document.querySelector(".h-products-title");
    if (productTitle) {
        const chars = productTitle.textContent.split("").map(char => `<span>${char}</span>`).join("");
        productTitle.innerHTML = chars;

        gsap.from(productTitle.querySelectorAll("span"), {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power4.out",
            scrollTrigger: {
                trigger: productTitle,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            stagger: 0.05
        });
    }

    const productItems = gsap.utils.toArray(".product-item-animation");
    productItems.forEach((item, index) => {
        gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 1 + (index * 0.2),
            delay: 0.5 + (index * 0.1),
            scrollTrigger: {
                trigger: productTitle,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            }
        });
    });

    // Portfolio başlığındaki her harf için span eklemek ve animasyonu başlatmak
    const portfolioTitle = document.querySelector(".portfolio-us-title");
    if (portfolioTitle) {
        const chars = portfolioTitle.textContent.split("").map(char => `<span>${char}</span>`).join("");
        portfolioTitle.innerHTML = chars;

        gsap.from(portfolioTitle.querySelectorAll("span"), {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power4.out",
            scrollTrigger: {
                trigger: portfolioTitle,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            stagger: 0.05
        });
    }

    const portfolioImages = gsap.utils.toArray(".portfolio-img");
    portfolioImages.forEach((img, index) => {
        gsap.from(img, {
            x: -200,
            opacity: 0,
            duration: 1 + (index * 0.2),
            delay: 0.5 + (index * 0.1),
            scrollTrigger: {
                trigger: portfolioTitle,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            }
        });
    });
    const portfolioText = gsap.utils.toArray(".home-portfolio-text");
    portfolioText.forEach((item, index) => {
        gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: portfolioText,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            }
        });
    });
    const homeReference = gsap.utils.toArray(".home-reference-section");
    homeReference.forEach((item, index) => {
        gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: homeReference,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            }
        });
    });
    const footer = gsap.utils.toArray(".footer");
    footer.forEach((item, index) => {
        gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            }
        });
    });
});