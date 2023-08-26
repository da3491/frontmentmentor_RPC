const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("modal_close");
const openModalButton = document.getElementById("modal_open");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("invisible");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("invisible");
});

// Function to toggle modal visibility
function closeModal() {
  modal.classList.remove("invisible");
}

function openModal() {
  modal.classList.remove("invisible");
}
