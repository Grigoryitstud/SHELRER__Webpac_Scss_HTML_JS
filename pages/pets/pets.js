const burger = document.getElementById('burger'),
  menu = document.getElementById('menu'),
  body = document.querySelector('.body'),
  title = document.querySelector('.header__titles'),
  subtitles = document.querySelector('.header__subtitles');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
  title.classList.toggle('lock');
  subtitles.classList.toggle('lock');
})

const pets = [
  {
    cardId: "0",
    name: "Sophia",
    img: "../../img/pets-sophia(2).png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    cardId: "1",
    name: "Timmy",
    img: "../../img/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
  },
  {
    cardId: "2",
    name: "Charly",
    img: "../../img/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
  },
  {
    cardId: "3",
    name: "Katrine",
    img: "../../img/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    cardId: "4",
    name: "Jennifer",
    img: "../../img/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    cardId: "5",
    name: "Woody",
    img: "../../img/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  },
  {
    cardId: "6",
    name: "Scarlett",
    img: "../../img/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    cardId: "7",
    name: "Freddie",
    img: "../../img/pets-freddie (1).png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
  },
],
  imgs = document.querySelectorAll('.pets__img'),
  names = document.querySelectorAll('.pets__name'),
  carousel = document.getElementById('carousel'),
  petsSlides = document.querySelector('.pets__slides'),
  pages = carousel.children,
  slides = document.querySelectorAll('.slide');

let completedSlides = [];
let cards = [];

const randomCards = () => {
  let randomNumber = Math.floor(Math.random() * pets.length);
  let hitDuplicate = false;
  while (completedSlides.length < 48) {
    if (completedSlides.length > 0) {
      if (completedSlides.length < 8) {
        completedSlides.forEach(Element => {
          if (Element == randomNumber) {
            hitDuplicate = true;
          }
        })
      }
      for (let i = (completedSlides.length - 1); i > (completedSlides.length - 6); i--) {
        if (completedSlides[i] == randomNumber) {
          hitDuplicate = true;
        }
      }
    }
    if (hitDuplicate == true) {
      randomCards();
    } else {
      completedSlides.push(randomNumber);
      let card = pets[randomNumber];
      cards.push(card);
    }
  }
}

const load = () => {
  const card = petsSlides.innerHTML;
  const page = carousel.innerHTML;

  for (let i = 1; i < (completedSlides.length); i++) {
    if (i % 8 === 0) {
      carousel.innerHTML += page;
      carousel.children[carousel.children.length - 1].classList.remove('active');
    }
    else {
      carousel.children[carousel.children.length - 1].innerHTML += card
    }
  }
  console.log(carousel.children)

  let imgs = document.querySelectorAll('.pets__img'),
    names = document.querySelectorAll('.pets__name'),
    slides = document.querySelectorAll('.slide');

  for (let i = 0; i <= (completedSlides.length - 1); i++) {
    imgs[i].src = cards[i].img;
    slides[i].id = cards[i].cardId;
    names[i].innerHTML = cards[i].name;
  }
}

window.addEventListener('load', () => {
  randomCards();
  load();
  console.log(pages);
})
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
    if(index == pages.length - 1) {
      lastDotsInactive ();
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
    lastDotsInactive ();
    prepareCurrentPage(index);
  }
}

const prevPage = () => {
  if (index == 0) {
    prepareCurrentPage(index);
  } else {
    lastDots ();
    index--;
    if(index == 0) {
      firstDotsInactive ();
    }
    prepareCurrentPage(index);
  }
}
const firstPage = () => {
  if (index == 0) {
    prepareCurrentPage(index);
  } else {
    lastDots ();
    index = 0;
    firstDotsInactive ();
    prepareCurrentPage(index);
  }
}


prev.addEventListener('click', prevPage);
next.addEventListener('click', nextPage);
first.addEventListener('click', firstPage);
last.addEventListener('click', lastPage);

