let menuDrawer = document.querySelector(".menu-drawer");
let navList = document.querySelector("#mobile-drawer .nav-list");

menuDrawer.addEventListener("click", () => {
    if (navList.style.display == "") {
        navList.style.display = "flex";
    } else if (navList.style.display == "none") {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none"
    }
})