// Variables

const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (e) {
    this.classList.toggle("active");

    const answer = this.querySelector(".answer"); // "this" unique accordion that was clicked.
    if (this.classList.contains("active")) {
      answer.style.height = answer.scrollHeight + "px"; // the answer gets its unique height.
    } else {
      answer.style.height = "0px";
    }
  });
}
