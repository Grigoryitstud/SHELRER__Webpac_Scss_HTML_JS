const prev = document.getElementById('btn-prev'),
  last = document.getElementById('btn-last'),
  first = document.getElementById('btn-first'),
  next = document.getElementById('btn-next'),
  activeDot = document.getElementById('active-btn');



let index = 0;

const activePage = n => {
  for (page of pages) {
    page.classList.remove('active');
  }
  pages[n].classList.add('active');
  activeDot.innerHTML = n + 1;
}
const prepareCurrentPage = ind => {
  activePage(index);
}

const lastDotsInactive = () => {
  next.classList.add('inactive');
  last.classList.add('inactive');
}
const lastDots = () => {
  next.classList.remove('inactive');
  last.classList.remove('inactive');
}

const firstDotsInactive = () => {
  first.classList.add('inactive');
  prev.classList.add('inactive');
}
const firstDots = () => {
  first.classList.remove('inactive');
  prev.classList.remove('inactive');
}

const nextPage = () => {
  if (index == pages.length - 1) {
    prepareCurrentPage(index);
  } else {
    firstDots();
    index++;
    if (index == pages.length - 1) {
      lastDotsInactive();
    }
    prepareCurrentPage(index);
  }
}
const lastPage = () => {
  if (index == pages.length - 1) {
    prepareCurrentPage(index);
  } else {
    firstDots();
    index = pages.length - 1;
    lastDotsInactive();
    prepareCurrentPage(index);
  }
}

const prevPage = () => {
  if (index == 0) {
    prepareCurrentPage(index);
  } else {
    lastDots();
    index--;
    if (index == 0) {
      firstDotsInactive();
    }
    prepareCurrentPage(index);
  }
}
const firstPage = () => {
  if (index == 0) {
    prepareCurrentPage(index);
  } else {
    lastDots();
    index = 0;
    firstDotsInactive();
    prepareCurrentPage(index);
  }
}

prev.addEventListener('click', prevPage);
next.addEventListener('click', nextPage);
first.addEventListener('click', firstPage);
last.addEventListener('click', lastPage);