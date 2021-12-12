// expanding/collapsing Recent Work section
const collapsibleBtn = document.getElementsByClassName("collapsibleBtn");
// const gridContainer = document.querySelector("#gridContainer");

// collapsibleBtn.addEventListener("click", () => {
//   gridContainer.classList.toggle("collapsed");
// });

for (let i = 0; i < collapsibleBtn.length; i++) {
  collapsibleBtn[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    // if (content.style.maxHeight) {
    //   content.style.maxHeight = null;
    // } else {
    //   content.style.maxHeight = content.scrollHeight + "px";
    // }

    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }

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
}

// function toggleIcon(x) {
//   x.classList.toggle("fa fa-chevron-up");
// }

// collapsibleBtn.addEventListener("click", () => {
//   console.log("test");
//   const icon = this.querySelector("i");
//   const span = this.querySelector("span");

//   if (icon.classList.contains("fa-chevron-down")) {
//     console.log("minus");
//     icon.classList.remove("fa-chevron-down");
//     icon.classList.add("fa-chevron-up");
//     span.innerHTML = "View Less";
//   } else {
//     icon.classList.remove("fa-chevron-up");
//     icon.classList.add("fa-chevron-down");
//     span.innerHTML = "View More";
//   }
// });

// create Object for each project:
// Header/title, image, link, description
