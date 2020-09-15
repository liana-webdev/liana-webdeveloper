const ham = document.querySelector('.hamburger');
const hamm = document.querySelector('.ham-m');
const nav1 = document.querySelector('.nav-1');
const nav2 = document.querySelector('.nav-2');
const nav3 = document.querySelector('.nav-3');
const nav4 = document.querySelector('.nav-4');

ham.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
};

nav1.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
  console.log('clicked');
};
nav2.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
  console.log('clicked');
};
nav3.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
  console.log('clicked');
};
nav4.onclick = function () {
  ham.classList.toggle('ham-c');
  hamm.classList.toggle('show');
  console.log('clicked');
};
