// Dark Mode

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const light =
        document.body.classList.contains("light-mode");

    themeToggle.textContent =
        light ? "☀️" : "🌙";

});


// Scroll Reveal

const reveals =
    document.querySelectorAll(".reveal");

const revealElements = () => {

    reveals.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 100;

        if(top < visible){
            el.classList.add("active");
        }

    });

};

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


// Active Navigation

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if(window.scrollY >= sectionTop){
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){
            link.classList.add("active");
        }

    });

});

// Scroll Reveal

const btnProject = document.getElementById("goToProject");

$(document).ready(function () {

    $(".nav-links a, .btn.secondary, .btn.primary").click(function (e) {

        e.preventDefault();

        const target =
            $(this).attr("href");

        $("html, body").animate(
            {
                scrollTop:
                    $(target).offset().top - 80
            },
            800
        );

    });

});
