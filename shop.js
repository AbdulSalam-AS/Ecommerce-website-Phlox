const sideNav = document.getElementById("side-nav");
const arrow = document.getElementById("arrow");

arrow.addEventListener("click", () => {
  const categoryShow = sideNav.getAttribute("data-category");

  if (categoryShow === "false") {
    sideNav.setAttribute("data-category", true);
    arrow.setAttribute("data-category", true);
  } else {
    sideNav.setAttribute("data-category", false);
    arrow.setAttribute("data-category", false);
  }
});

const searchBtn = document.querySelector(".header-search");
const closeBtn = document.querySelector(".search-close-btn");
const searchBar = document.getElementById("search-bar");

searchBtn.addEventListener("click", () => {
  const visibility = searchBar.getAttribute("data-visible");
  if (visibility === "false") {
    searchBar.setAttribute("data-visible", true);
  }
});

closeBtn.addEventListener("click", () => {
  searchBar.setAttribute("data-visible",false);
})