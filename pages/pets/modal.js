let 
  overlay = document.getElementById('overlay'),
  btnClose = document.getElementById('btn-close'),
  modal = document.getElementById('wrapper-modal');

const openModal = () => {
  modal.classList.add('active');
  body.classList.add('lock');
};
function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('lock');
}
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);