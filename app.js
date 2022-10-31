document.getElementById("modal");
function fadeModal() {
  document.getElementById("modal").classList.add("fadeModal");
}
setTimeout(fadeModal, 1000);

let fadeButton_ = document.getElementById("click");
function fadeButton() {
  document.getElementById("modal").classList.add("fade-button");
}

fadeButton_.addEventListener("click", fadeButton);

let buttonOpen = document.querySelector("#button-open");

buttonOpen.addEventListener("click", () => {
  document.getElementById("modal").classList.add("fadeModal");
  document.getElementById("modal").classList.toggle("fade-button");
});
