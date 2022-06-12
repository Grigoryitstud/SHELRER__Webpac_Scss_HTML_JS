const

  prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  carousel = document.getElementById('carousel'),
  slides = document.getElementsByClassName('slide'),
  card__left = document.getElementsByClassName('card__left'),
  card__active = document.getElementsByClassName('card__active'),
  card__right = document.getElementsByClassName('card__right'),


  item_left = document.getElementById('item__left'),
  item_right = document.getElementById('item__right'),
  item_active = document.getElementById('item__active');

  const btnOpen = document.getElementsByClassName('pets__btn');
  for (btn of btnOpen) {
    btn.addEventListener('click', e => openModal(e));
  };

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
  imgs = document.getElementsByClassName('pets__img'),
  names = document.getElementsByClassName('pets__name');

const moveRight = () => {
  carousel.classList.add("transition_right");
  next.removeEventListener('click', moveRight);
  prev.removeEventListener('click', moveLeft);
}
const moveLeft = () => {
  carousel.classList.add("transition_left");
  prev.removeEventListener('click', moveLeft);
  next.removeEventListener('click', moveRight);
}
next.addEventListener('click', moveRight);
prev.addEventListener('click', moveLeft);
let completedSlides = [];

const randomIndex = () => {
  let randomNumber = Math.floor(Math.random() * pets.length);
  let hitDuplicate = false;
  while (completedSlides.length < card__active.length) {
    for (var i = 0, length = card__active.length; i < length; i++) {
      if (randomNumber == card__active[i].id) {
        hitDuplicate = true;
      }
    };
    if (completedSlides.length > 0) {
      
      completedSlides.forEach(el => {
        
        if (randomNumber == el) {
          hitDuplicate = true;
        }
      })
    }  
    if (hitDuplicate == true) {
      randomIndex();
    } else {
      completedSlides.push(randomNumber)
      randomIndex();
    }
  }
} 
window.addEventListener('load', () => {
  if (document.documentElement.clientWidth > 1200){
    slides[0].classList.remove("no");
    slides[3].classList.remove("no");
    slides[6].classList.remove("no");
  }
  if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 720) {
    slides[0].classList.add("no");
    slides[3].classList.add("no");
    slides[6].classList.add("no");
    slides[1].classList.remove("no");
    slides[4].classList.remove("no");
    slides[7].classList.remove("no");
  }
  if (document.documentElement.clientWidth <= 720) {
    slides[1].classList.add("no");
    slides[4].classList.add("no");
    slides[7].classList.add("no");
  }
  console.log(card__left)
})
window.addEventListener('resize', () => {
  setTimeout(function () {
    if (document.documentElement.clientWidth > 1200){
      slides[0].classList.remove("no");
      slides[3].classList.remove("no");
      slides[6].classList.remove("no");
    }
    if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 720) {
      slides[0].classList.add("no");
      slides[3].classList.add("no");
      slides[6].classList.add("no");
      slides[1].classList.remove("no");
      slides[4].classList.remove("no");
      slides[7].classList.remove("no");
    }
    if (document.documentElement.clientWidth <= 720) {
      slides[1].classList.add("no");
      slides[4].classList.add("no");
      slides[7].classList.add("no");
    }
  }, 10)
});

carousel.addEventListener("animationend", (animationEvent) => {  
  
  if (animationEvent.animationName === "move_left") {    
    
    carousel.classList.remove("transition_left");
    completedSlides = [];
    let Random = () =>{
      for (i = 0; i < card__active.length; i++) {
        
        card__right[i].innerHTML = card__active[i].innerHTML;
        card__right[i].id = card__active[i].id;
        card__active[i].innerHTML = card__left[i].innerHTML;
        card__active[i].id = card__left[i].id;
        
      }
    }
    Random();
    
    randomIndex();
    

    let newCards = () =>{
      for (i = 0; i < card__active.length; i++) {
        card__left[i].id = completedSlides[i]
        imgs[i].src = pets[completedSlides[i]].img;
        names[i].innerHTML = pets[completedSlides[i]].name;
      }
    }    
    newCards(0);
    console.log(card__left)
  } else {
    carousel.classList.remove("transition_right");
    completedSlides = [];
    let Random = () => {
      for (i = 0; i < card__active.length; i++) {
        console.log(card__active)
        card__left[i].innerHTML = card__active[i].innerHTML;
        card__left[i].id = card__active[i].id;
        card__active[i].innerHTML = card__right[i].innerHTML;
        card__active[i].id = card__right[i].id;
        console.log(card__active)
      }
    }
    Random();
    randomIndex();

    let newCards = () => {
      for (i = 0; i < card__active.length; i++) {
        console.log(card__active)
        card__right[i].id = completedSlides[i]
        imgs[6 + i].src = pets[completedSlides[i]].img;
        names[6 + i].innerHTML = pets[completedSlides[i]].name;
        console.log(card__active)
      }
    }    
    newCards();
  }
  for (btn of btnOpen) {
    btn.addEventListener('click', e => openModal(e));
  };
  prev.addEventListener('click', moveLeft);
  next.addEventListener('click', moveRight);
})
