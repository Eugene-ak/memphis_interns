var headerElement = document.getElementById("page-header");
var currentPath = window.location.pathname;

var navbarAlt = fetch("../templates/header.html")
  .then((response) => response.text())
  .then((data) => {
    headerElement.innerHTML = data;
  });

var mobileMenuDrawer = document.getElementById("mobile-menu-button");
var navListDrawer = document.getElementById("nav-list-drawer");

console.log(mobileMenuDrawer.classList);
console.log(navListDrawer.classList);

document.addEventListener("DOMContentLoaded", () => {
    mobileMenuDrawer.addEventListener("click", () => {
        navListDrawer.classList.add("show-nav-list");
    });
});

