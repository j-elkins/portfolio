// expanding/collapsing Recent Work section
const collapsibleBtn = document.querySelector(".collapsibleBtn");
const gridContainer = document.querySelector("#fullPortfolio");

collapsibleBtn.addEventListener("click", function () {
  gridContainer.classList.toggle("collapsed");

  // change button icon on click
  const icon = this.querySelector("i");
  const span = this.querySelector("span");

  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
    span.innerHTML = "&nbsp View Less";
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
    span.innerHTML = "&nbsp View Full Portfolio";
  }
});

// create Object for each project:
// Header/title, image, link, description
