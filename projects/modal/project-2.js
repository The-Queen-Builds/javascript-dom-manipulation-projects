// DOM manipulation // Variables

let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

// Event Listeners
openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  // e.target is the exact element clicked, whether it is the body or a paragraph, now modalContainer wraps the paragraph and has it's z-index set to 1; it's width and height set to 100%, so anywhere in the window outside of the modal that is clicked will bring set the display of the modalContainer to none, making the modal disappear.
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
