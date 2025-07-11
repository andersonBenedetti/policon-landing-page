const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  iconMenu.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});

const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    iconMenu.classList.remove("hidden");
    iconClose.classList.add("hidden");
  });
});
