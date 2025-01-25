// script.js
let currentIndex = 0;

function openModal(index) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const images = document.querySelectorAll(".gallery .image img");

  currentIndex = index - 1;
  modalImage.src = images[currentIndex].src;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function changeImage(direction) {
  const images = document.querySelectorAll(".gallery .image img");
  currentIndex = (currentIndex + direction + images.length) % images.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex].src;
}
