const modal = document.getElementById('wrapper-modal'),
btnOpens = document.querySelectorAll('.pets__btn'),
overlay = document.getElementById('overlay'),
btnClose = document.getElementById('btn-close');

const openModal = n => {
  modal.classList.add('active');
  body.classList.add('lock');
};

btnOpens.forEach((Element) => {
  Element.addEventListener('click', openModal);
})

function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('lock');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);