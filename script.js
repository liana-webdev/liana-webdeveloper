const ham = document.querySelector('.hamburger');
const hamm = document.querySelector('.ham-m');
const navb = document.querySelector('.nav-b');

ham.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
};

navb.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
};
