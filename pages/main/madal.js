const modal = document.getElementById('wrapper-modal'),
  overlay = document.getElementById('overlay'),
  btnClose = document.getElementById('btn-close');

const openModal = (el) => {
  console.log(el.target.parentNode)
  let num = el.target.parentNode.id;
  modal.classList.add('active');
  body.classList.add('lock');
  document.getElementById('pet__img').src = pets[num].img;
  document.getElementById('mod__title').innerHTML = pets[num].name;
  document.getElementById('mod__subtitle').innerHTML = `${pets[num].type} - ${pets[num].breed}`;
  document.getElementById('pet__info').innerHTML = pets[num].description;
  document.getElementById('pet__more').innerHTML = `<li><span class="datas">Age:</span> <span class="list">${pets[num].age}</span></li><li><span class="datas">Inoculations:</span> <span class="list">${pets[num].inoculations}</span></li><li><span class="datas">Diseases:</span> <span class="list">${pets[num].diseases}</span></li><li><span class="datas">Diseases:</span> <span class="list">${pets[num].diseases}</span></li>`
  let lists = document.getElementsByClassName('list');
  for(lis of lists) { lis.style.color = '#000000';}
  let datas = document.getElementsByClassName('datas');
  for(dat of datas) { dat.style.color = '#000000';
                      dat.style.fontWeight = '900';}};

function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('lock');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);