var tumbler1 = document.querySelector(".tumbler-1");
var tumbler2 = document.querySelector(".tumbler-2");
var tumbler3 = document.querySelector(".tumbler-3");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");

var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var name = popup.querySelector(".name");
var mail = popup.querySelector(".email");
var message = popup.querySelector(".message");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

tumbler1.addEventListener("click", function (evt) {
  tumbler2.classList.remove("active");
  tumbler3.classList.remove("active");
  slide2.classList.remove("slide-show");
  slide3.classList.remove("slide-show");
  tumbler1.classList.add("active");
  slide1.classList.add("slide-show");
});
tumbler2.addEventListener("click", function (evt) {
  tumbler1.classList.remove("active");
  tumbler3.classList.remove("active");
  slide1.classList.remove("slide-show");
  slide3.classList.remove("slide-show");
  tumbler2.classList.add("active");
  slide2.classList.add("slide-show");
});
tumbler3.addEventListener("click", function (evt) {
  tumbler1.classList.remove("active");
  tumbler2.classList.remove("active");
  slide1.classList.remove("slide-show");
  slide2.classList.remove("slide-show");
  tumbler3.classList.add("active");
  slide3.classList.add("slide-show");
});