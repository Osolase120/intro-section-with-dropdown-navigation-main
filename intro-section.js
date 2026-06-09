const menuToggle = document.getElementById("Hamburger");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
});

const dropdownMenus = document.querySelectorAll(".dropDown-menu");

dropdownMenus.forEach(menu => {
  const content = menu.querySelector(".dropDown-content");

  if (!content) return;

  menu.addEventListener("click", (e) => {
    e.preventDefault();

    dropdownMenus.forEach(item => {
      if (item !== menu) {
        item.querySelector(".dropDown-content")?.classList.remove("active");
        item.querySelector(".icon-arrow-down")?.classList.remove("hide");
        item.querySelector(".icon-arrow-up")?.classList.remove("active");
      }
    });

    content.classList.toggle("active");
    menu.querySelector(".icon-arrow-down").classList.toggle("hide");
    menu.querySelector(".icon-arrow-up").classList.toggle("active");
  });
});