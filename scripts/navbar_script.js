var currentPath = window.location.pathname;
var homeLink = document.getElementById("home-link");
var aboutLink = document.getElementById("about-link");
var servicesLink = document.getElementById("services-link");
var contactLink = document.getElementById("contact-link");


function getLinkValues() {
    console.log(currentPath);
    console.log("home link", homeLink);
    console.log("home link", homeLink.target.value);
}

document.addEventListener("DOMContentLoaded", getLinkValues());