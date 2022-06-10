let 
  
  overlay = document.getElementById('overlay'),
  btnClose = document.getElementById('btn-close'),
  modal = document.getElementById('wrapper-modal');

  window.addEventListener('load', () => {
    var btnOpen = document.querySelectorAll('.pets__btn')
    console.log(btnOpen)
  })

  console.log(btnOpen)

const openModal = () => {
  modal.classList.add('active');
  body.classList.add('lock');
};
// btnOpen.forEach((Element) => {
// Element.addEventListener('click', openModal);
// })

function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('lock');
}

btnOpen.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);