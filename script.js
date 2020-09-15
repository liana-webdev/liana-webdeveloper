const ham = document.querySelector('.hamburger');
const hamm = document.querySelector('.ham-m');

ham.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
};
