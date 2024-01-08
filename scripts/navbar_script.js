let menuDrawer = document.querySelector(".menu-drawer");
let navList = document.querySelector(".nav-list-2");
// console.log(navList);

menuDrawer.addEventListener("click", () => {
    console.log(navList.classList);
    navList.classList.add("show-nav-list");
})