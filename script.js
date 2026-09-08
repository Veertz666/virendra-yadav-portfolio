/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }, 700);

});


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ================= TYPING ANIMATION ================= */

const typingElement =
    document.getElementById("typing");

const roles = [

    "Java Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Problem Solver"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}

typeEffect();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= TOP BUTTON ================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= CONTACT FORM ================= */




/* ================= MOUSE PARALLAX ================= */

const heroImage =
    document.querySelector(".hero-image");


document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 60;

    const y =
        (window.innerHeight / 2 - event.clientY) / 60;


    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});