/* Header Sticky JS Start */

if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header__logo--link > svg');
    let lastScrollY = 0;
    let rotation = 0;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
            logo.style.transform = 'rotate(0deg)';
            return;
        }

        if (header.classList.contains('sticky-header')) {
            const delta = window.scrollY - lastScrollY;
            rotation += delta * 0.1;
            logo.style.transform = `rotate(${rotation}deg)`;
        }

        lastScrollY = window.scrollY;
    });
}

/* Header Sticky JS End */

/* Banner Section JS Start */

if (document.querySelector('.banner__main')) {

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".banner__main",
            start: "top top",
            end: "+=1500",
            scrub: true,
            pin: true
        }
    });

    tl.to(".banner__title.left__hide", {
        x: "-220%"
    }, 0)

        .to(".banner__title.right__hide", {
            x: "220%"
        }, 0)

        .to(".banner__content .banner__title:first-child", {
            scale: 1.5,
            y: 40
        }, 0)

        .to(".banner__content .banner__title:last-child", {
            scale: 1.5,
            y: -40
        }, 0)

        .to(".banner__search", {
            y: "800%"
        }, 0)

        .to(".banner__intro", {
            bottom: 0,
            opacity: 1,
            transform: "none",
        }, 0);
}

/* Banner Section JS End */

/* Pricing Section JS Start */

if (document.querySelector('.pricing--tab__inner')) {

    const tabInner = document.querySelector('.pricing--tab__inner');
    const contentInner = document.querySelector('.pricing--tab__content--wrapper__inner');
    const buttons = document.querySelectorAll('.pricing--tab__inner button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            tabInner.classList.remove('monthly-active', 'annually-active');
            contentInner.classList.remove('monthly-active', 'annually-active');

            if (index === 0) {
                tabInner.classList.add('monthly-active');
                contentInner.classList.add('monthly-active');
            } else {
                tabInner.classList.add('annually-active');
                contentInner.classList.add('annually-active');
            }

        });
    });
}

/* Pricing Section JS End */

/* FAQ Section JS Start */

if (document.querySelector('.faq--item')) {
    const items = document.querySelectorAll(".faq--item");

    items.forEach(item => {
        const question = item.querySelector(".faq--question");
        const answer = item.querySelector(".faq--answer");

        question.addEventListener("click", () => {

            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq--answer").style.height = 0;
                }
            });

            if (item.classList.contains("active")) {
                item.classList.remove("active");
                answer.style.height = 0;
            } else {
                item.classList.add("active");
                answer.style.height = answer.scrollHeight + "px";
            }

        });
    });
}

/* FAQ Section JS End */

/* On Scroll Background Change JS Start */

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.meet__golao-main')) {

        const body = document.body;
        const meetSection = document.querySelector(".meet__golao-main");
        const authorSection = document.querySelector(".author__main");

        body.style.backgroundColor = "#374a34";

        function updateBackground() {

            const meetRect = meetSection.getBoundingClientRect();
            const authorRect = authorSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (authorRect.top <= windowHeight * 0.2) {
                body.style.backgroundColor = "#202633";
            }
            else if (meetRect.top <= windowHeight * 0.1) {
                body.style.backgroundColor = "#451930";
            }
            else {
                body.style.backgroundColor = "#374a34";
            }
        }

        window.addEventListener("scroll", updateBackground);
    }
});

/* On Scroll Background Change JS End */

/* On Scroll Transform JS Start */

document.addEventListener("DOMContentLoaded", function () {

    const boxes = document.querySelectorAll(".scroll--transform--box");
    let lastScrollY = window.scrollY;

    boxes.forEach(box => {
        box.style.transform = "translate(0px, 80px)";
        box.style.transition = "transform 1.1s ease";
    });

    window.addEventListener("scroll", function () {

        const currentScrollY = window.scrollY;
        const scrollingUp = currentScrollY < lastScrollY;

        boxes.forEach(box => {

            const rect = box.getBoundingClientRect();

            if (!scrollingUp && rect.top < window.innerHeight) {
                box.style.transform = "translate(0px, 0px)";
            }

            if (scrollingUp && rect.top >= window.innerHeight) {
                box.style.transform = "translate(0px, 80px)";
            }

        });

        lastScrollY = currentScrollY;

    });

});

/* On Scroll Transform JS End */

/* Header JS Start */

document.querySelectorAll('[aria-label]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('aria-label');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* Header JS End */

/* Creator Form JS Start */

if (document.querySelector('.creator--form__inner')) {
    const steps = document.querySelectorAll(".creator--form__inner form ul li");
    const nextBtn = document.querySelector(".form--arrows button:last-child");
    const prevBtn = document.querySelector(".form--arrows button:first-child");
    const ul = document.querySelector(".creator--form__inner form ul");

    let currentStep = 0;

    function updateStep() {

        ul.style.transform = `translateX(-${currentStep * 100}%)`;

        if (currentStep === 0) {
            prevBtn.style.opacity = "0";
            prevBtn.style.pointerEvents = "none";
        } else {
            prevBtn.style.opacity = "1";
            prevBtn.style.pointerEvents = "auto";
        }

        if (currentStep === steps.length - 1) {
            nextBtn.style.opacity = "0";
            nextBtn.style.pointerEvents = "none";
        } else {
            nextBtn.style.opacity = "1";
            nextBtn.style.pointerEvents = "auto";
        }
    }

    updateStep();

    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep();
        }
    });

    prevBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (currentStep > 0) {
            currentStep--;
            updateStep();
        }
    });
}

/* Creator Form JS End */

/* Categories Select JS Start */

const elements = document.querySelectorAll('.js-example-tags');

elements.forEach(el => {
    new Choices(el, {
        removeItemButton: true,
        duplicateItemsAllowed: false
    });
});

/* Categories Select JS End */

/* Categories Filter Section JS Start */

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.categories--filter--item')) {

        const categorySelect = document.getElementById("categoryFilter");
        const sortSelect = document.getElementById("sortFilter");
        const items = document.querySelectorAll(".categories--filter--item");

        function filterItems() {

            const categoryOption = categorySelect.options[categorySelect.selectedIndex];
            const category = categoryOption.getAttribute("aria-label");

            const sortOption = sortSelect.options[sortSelect.selectedIndex];
            const sort = sortOption.getAttribute("aria-label");

            items.forEach(item => {

                const matchCategory = (category === "all" || item.classList.contains(category));
                const matchSort = item.classList.contains(sort);

                if (matchCategory && matchSort) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

        }

        categorySelect.addEventListener("change", filterItems);
        sortSelect.addEventListener("change", filterItems);
    }

});

/* Categories Filter Section JS End */

/* Marquee Section JS Start */

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.marquee--main')) {

        const track = document.querySelector(".marquee--track");
        const slides = document.querySelectorAll(".marquee--slide");

        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });

        const totalWidth = track.scrollWidth / 2;

        gsap.to(track, {
            x: -totalWidth,
            duration: 30,
            ease: "none",
            repeat: -1
        });
    }

});

/* Marquee Section JS End */

/* Authors List Section JS Start */

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.author--list--sec')) {

        const items = document.querySelectorAll(".author--list--item");
        const btn = document.querySelector(".author--list--button a.btn");

        let visibleCount = 6;

        items.forEach((item, index) => {
            if (index >= visibleCount) {
                item.style.display = "none";
            }
        });

        btn.addEventListener("click", function (e) {
            e.preventDefault();

            let nextItems = 3;

            for (let i = visibleCount; i < visibleCount + nextItems && i < items.length; i++) {
                items[i].style.display = "block";
            }

            visibleCount += nextItems;

            if (visibleCount >= items.length) {
                btn.style.display = "none";
            }
        });
    }

});

/* Authors List Section JS End */