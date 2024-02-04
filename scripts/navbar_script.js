let menuDrawer = document.querySelector(".menu-drawer");
let navList = document.querySelector("#mobile-drawer .nav-list");
let mainScreen = document.querySelector("main");
let screenWidth = window.innerWidth;

console.log(screenWidth);

let homelink = document.querySelector("#mobile-drawer .nav-list ul li #home-link");
let abtlink = document.querySelector("#mobile-drawer .nav-list ul li #about-link");
let serviceslink = document.querySelector("#mobile-drawer .nav-list ul li #services-link");
let contactlink = document.querySelector("#mobile-drawer .nav-list ul li #contact-link");

menuDrawer.addEventListener("click", () => {
    if (navList.style.display == "") {
        navList.style.display = "flex";
        mainScreen.style.filter = "blur(1rem)";
    } else if (navList.style.display == "none") {
        navList.style.display = "flex";
        mainScreen.style.filter = "blur(1rem)";
    } else {
        navList.style.display = "none";
        mainScreen.style.filter = "blur(0)";
    }
});

homelink.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("./pages/home.html")
        .then((response) => response.text())
        .then((data) => (pageContent.innerHTML = data));

    body.classList.remove("about-body");
    body.classList.remove("contact-body");

    if (navList.style.display == "flex" && mainScreen.style.filter == "blur(1rem)") {
        navList.style.display = "none";
        mainScreen.style.filter = "blur(0)";
    } else {
        navList.style.display = "flex";
    }
});

abtlink.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("./pages/about.html")
        .then((response) => response.text())
        .then((data) => (pageContent.innerHTML = data));

    body.classList.add("about-body");
    body.classList.remove("contact-body");

    if (navList.style.display == "flex" && mainScreen.style.filter == "blur(1rem)") {
        navList.style.display = "none";
        mainScreen.style.filter = "blur(0)";
    } else {
        navList.style.display = "flex";
    }
});

serviceslink.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("./pages/services.html")
        .then((response) => response.text())
        .then((data) => (pageContent.innerHTML = data));

    body.classList.remove("about-body");
    body.classList.remove("contact-body");

    if (navList.style.display == "flex" && mainScreen.style.filter == "blur(1rem)") {
        navList.style.display = "none";
        mainScreen.style.filter = "blur(0)";
    } else {
        navList.style.display = "flex";
    }
});

contactlink.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("./pages/contact.html")
        .then((response) => response.text())
        .then((data) => (pageContent.innerHTML = data));

    body.classList.add("contact-body");
    body.classList.remove("about-body");

    if (navList.style.display == "flex" && mainScreen.style.filter == "blur(1rem)") {
        navList.style.display = "none";
        mainScreen.style.filter = "blur(0)";
    } else {
        navList.style.display = "flex";
    }
});
