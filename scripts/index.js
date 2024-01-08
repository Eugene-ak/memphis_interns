let pageContent = document.querySelector(".page-content");
let body = document.querySelector("body");

let page = fetch("./pages/home.html")
  .then(response => response.text())
  .then(data => pageContent.innerHTML = data);

let homeLink = document.querySelector("#home-link");
let aboutLink = document.querySelector("#about-link");
let servicesLink = document.querySelector("#services-link");
let contactLink = document.querySelector("#contact-link");

homeLink.classList.add("active-link");

homeLink.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("./pages/home.html")
    .then(response => response.text())
    .then(data => pageContent.innerHTML = data);

  if (aboutLink.classList.contains("active-link") || servicesLink.classList.contains("active-link") || contactLink.classList.contains("active-link")) {
    aboutLink.classList.remove("active-link");
    servicesLink.classList.remove("active-link");
    contactLink.classList.remove("active-link");
  }

  homeLink.classList.add("active-link");
  body.classList.remove("about-body");
  body.classList.remove("contact-body");
});

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("./pages/about.html")
    .then(response => response.text())
    .then(data => pageContent.innerHTML = data);

  if (homeLink.classList.contains("active-link") || servicesLink.classList.contains("active-link") || contactLink.classList.contains("active-link")) {
    homeLink.classList.remove("active-link");
    servicesLink.classList.remove("active-link");
    contactLink.classList.remove("active-link");
  }

  aboutLink.classList.add("active-link");
  body.classList.add("about-body");
  body.classList.remove("contact-body");
  body.classList.remove("main-body");
});

servicesLink.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("./pages/services.html")
    .then(response => response.text())
    .then(data => pageContent.innerHTML = data);

  if (homeLink.classList.contains("active-link") || aboutLink.classList.contains("active-link") || contactLink.classList.contains("active-link")) {
    homeLink.classList.remove("active-link");
    aboutLink.classList.remove("active-link");
    contactLink.classList.remove("active-link");
  }

  servicesLink.classList.add("active-link");
  // body.classList.add("main-body");
  body.classList.remove("contact-body");
  body.classList.remove("about-body");
});

contactLink.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("./pages/contact.html")
    .then(response => response.text())
    .then(data => pageContent.innerHTML = data);

  if (homeLink.classList.contains("active-link") || aboutLink.classList.contains("active-link") || servicesLink.classList.contains("active-link")) {
    homeLink.classList.remove("active-link");
    aboutLink.classList.remove("active-link");
    servicesLink.classList.remove("active-link");
  }

  contactLink.classList.add("active-link");
  body.classList.add("contact-body");
  body.classList.remove("about-body");
  body.classList.remove("main-body");
});
