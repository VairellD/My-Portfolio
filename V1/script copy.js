const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        toggle.textContent = "🌙";
        localStorage.setItem("theme","light");
    }

});

window.addEventListener("load", () => {

    const theme = localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark");
        toggle.textContent = "☀️";
    }

});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Pesan berhasil dikirim!");
    form.reset();
});