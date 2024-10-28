// javascript.js
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.addEventListener("animationend", (event) => {
    if (event.animationName === "moveRight") {
      loader.style.display = "block";
      content.style.display = "block";
    }
  });
});
