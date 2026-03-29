document.addEventListener("DOMContentLoaded", function () {
    const hasSeenGlitch = sessionStorage.getItem("glitchPlayed");
    const heroGlitchTarget = document.querySelector(".hero-glitch-target");

    if (!heroGlitchTarget) {
        return;
    }

    if (!hasSeenGlitch) {
        document.body.classList.add("play-glitch");
        sessionStorage.setItem("glitchPlayed", "true");

        window.setTimeout(function () {
            document.body.classList.remove("play-glitch");
        }, 1400);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".site-nav a");

    navLinks.forEach(function (link) {
        link.setAttribute("data-text", link.textContent.trim());

        link.addEventListener("mouseenter", function () {
            link.classList.remove("nav-glitch-active");
            void link.offsetWidth;
            link.classList.add("nav-glitch-active");
        });

        link.addEventListener("animationend", function () {
            link.classList.remove("nav-glitch-active");
        });

        link.addEventListener("touchstart", function () {
            link.classList.remove("nav-glitch-active");
            void link.offsetWidth;
            link.classList.add("nav-glitch-active");
        }, { passive: true });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logoLink = document.querySelector(".logo");

    if (!logoLink) {
        return;
    }

    logoLink.addEventListener("mouseenter", function () {
        logoLink.classList.remove("logo-glitch-active");
        void logoLink.offsetWidth;
        logoLink.classList.add("logo-glitch-active");
    });

    logoLink.addEventListener("animationend", function () {
        logoLink.classList.remove("logo-glitch-active");
    });

    logoLink.addEventListener("touchstart", function () {
        logoLink.classList.remove("logo-glitch-active");
        void logoLink.offsetWidth;
        logoLink.classList.add("logo-glitch-active");
    }, { passive: true });
});