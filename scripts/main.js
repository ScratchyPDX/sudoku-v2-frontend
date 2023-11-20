// Show spinner
document.body.style.overflow = "hidden"; // Prevent scrolling
const spinner = document.querySelector(".spinner");
spinner.style.display = "block";

// Redirect after the entire page is loaded
window.addEventListener("load", function () {
  // Hide spinner
  // spinner.style.display = 'none';
  document.body.style.overflow = "visible";

  // Redirect after 3 seconds (adjust as needed)
  setTimeout(function () {
    window.location.href = "https://scratchypdx-sudoku-v2.onrender.com";
  }, 1000);
});
