window.addEventListener("load", function () {

    console.log("Portfolio Loaded Successfully");

    // Skills Animation
    const python = document.querySelector(".python");
    const java = document.querySelector(".java");
    const sql = document.querySelector(".sql");
    const html = document.querySelector(".html");
    const js = document.querySelector(".js");
    const ml = document.querySelector(".ml");

    if (python) python.style.width = "90%";
    if (java) java.style.width = "80%";
    if (sql) sql.style.width = "85%";
    if (html) html.style.width = "90%";
    if (js) js.style.width = "75%";
    if (ml) ml.style.width = "85%";

    // Certificate Animation
    const cards = document.querySelectorAll(".certificate-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);

    });
// About Section Animation

const aboutSection = document.querySelector(".about-container");

if(aboutSection){
    aboutSection.classList.add("show");
}
});