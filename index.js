document.querySelector(".burger-menu").addEventListener("click", () => {
    document.querySelector(".burger-menu").classList.toggle("burger-menu-close");
    document.querySelector(".menu").classList.toggle("menu-show");
    document.querySelector("body").classList.toggle("no-scroll");
  })