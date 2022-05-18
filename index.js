const modal = document.querySelector('.modal');
const modalDrog = document.querySelector('.modalDrog');
const modalMoney = document.querySelector('.modalMoney');

const closeIcon = document.querySelector('.modal-content__close');
const closeIcon2 = document.querySelector('.modal-content__close2');
const closeIcon3 = document.querySelector('.modal-content__close3');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

button1.addEventListener('click', () => {
  modal.classList.remove('hidden')
  modal.classList.add('visible')
});
closeIcon.addEventListener('click', () => {
  modal.classList.remove('visible')
  modal.classList.add('hidden')
});

button2.addEventListener('click', () => {
  modalDrog.classList.remove('hidden')
  modalDrog.classList.add('visible')
});
closeIcon2.addEventListener('click', () => {
  modalDrog.classList.remove('visible')
  modalDrog.classList.add('hidden')
});
button3.addEventListener('click', () => {
  modalMoney.classList.remove('hidden')
  modalMoney.classList.add('visible')
});
closeIcon3.addEventListener('click', () => {
  modalMoney.classList.remove('visible')
  modalMoney.classList.add('hidden')
});