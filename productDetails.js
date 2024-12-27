const descriptionTab = document.getElementById("Description");
const reviewTab = document.getElementById("reviewSection");

const descriptionBtn = document.querySelector(".desc");
const reviewBtn = document.querySelector(".rev");

reviewBtn.addEventListener("click", () => {
  const visibility = reviewTab.getAttribute("data-visible");
  if (visibility === "false") {
    descriptionTab.setAttribute("data-visible", false);
    reviewTab.setAttribute("data-visible", true);
  }
});

descriptionBtn.addEventListener("click", () => {
  const visibility = descriptionBtn.getAttribute("data-visible");
  if (visibility === "false") {
    descriptionTab.setAttribute("data-visible", true);
    reviewTab.setAttribute("data-visible", false);
  }
});
