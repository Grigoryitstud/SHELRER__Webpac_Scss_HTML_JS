const burger = document.getElementById('burger'),
  menu = document.getElementById('menu'),
  body = document.querySelector('.body');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  })
  