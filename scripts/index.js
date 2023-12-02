var headerElement = document.getElementById("page-header");
var currentPath = window.location.pathname;

var navbarAlt = fetch("../templates/header.html")
    .then((response) => response.text())
    .then((data) => {
        headerElement.innerHTML = data;
    });




if (currentPath == "/about.html") {
    var childnodes = headerElement.childNodes;
    console.log(childnodes.item(0));
    // link.classList.add("active-link");
}

// switch (currentPath) {
//     case "/index.html":
//         homeLink.classList.add("active-link");
//         break;
//     case "/services.html":
//         servicesLink.classList.add("active-link");
//         break;
//     case "/about.html":
//         aboutLink.classList.add("active-link");
//         break;
//     case "/contact.html":
//         contactLink.classList.add("active-link");
//         break;
// }
