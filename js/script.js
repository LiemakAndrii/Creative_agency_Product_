// +Фокус на кружки пагинации при фокусе на соотв-ую карточку
const cards = document.querySelectorAll(".news__card-item");
const circles = document.querySelectorAll(".circle");

cards.forEach((card, index) => {
  card.addEventListener("focus", () => {
    circles.forEach((circle) => circle.classList.remove("active"));
    circles[index].classList.add("active");
  });
});

// +Слайдер
$(document).ready(function () {
  $(`.slider`).slick({
    arrows: true,
    dots: true,
  });
});
