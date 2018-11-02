var pageHeader = document.querySelector(".page-header");
var menuToggle = document.querySelector(".page-header__menu-toggle");

pageHeader.classList.remove("page-header--no-js");

pageHeader.classList.add
("page-header--menu-closed");

menuToggle.addEventListener("click", function() {
  if (pageHeader.classList.contains("page-header--menu-closed")) {
    pageHeader.classList.remove("page-header--menu-closed");
    pageHeader.classList.add("page-header--menu-opened");
  } else {
    pageHeader.classList.add("page-header--menu-closed");
    pageHeader.classList.remove("page-header--menu-opened");
  }
})
