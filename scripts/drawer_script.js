var mobileMenuDrawer = document.getElementById("mobile-menu-button");
var navListDrawer = document.getElementById("nav-list-drawer");

document.addEventListener("DOMContentLoaded", () => {
    mobileMenuDrawer.addEventListener("click", () => {
        navListDrawer.classList.add("show-nav-list");
    });
});