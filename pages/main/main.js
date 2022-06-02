const burger = document.getElementById('burger'),
  menu = document.getElementById('menu'),
  body = document.querySelector('.body'),

  prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  carousel = document.getElementById('carousel'),
  slides = document.querySelectorAll('.slide'),
  card__left = document.querySelectorAll('.card__left'),
  card__active = document.querySelectorAll('.card__active'),


  item_left = document.getElementById('item__left'),
  item_right = document.getElementById('item__right'),
  item_active = document.getElementById('item__active'),



  modal = document.getElementById('wrapper-modal'),
  btnOpens = document.querySelectorAll('.pets__btn'),
  overlay = document.getElementById('overlay'),
  btnClose = document.getElementById('btn-close');


  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
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
  names = document.querySelectorAll('.pets__name');

  let completedSlides = [];
  let activeSlides = [0, 1, 2, 6, 7];
   
  const randomIndex = () => {
    let randomNumber = Math.floor(Math.random() * pets.length);
    console.log(randomNumber);  
    let hitDuplicate = false;    
      while(completedSlides.length < card__active.length){
        activeSlides.forEach(item => {
          if(item == randomNumber) {
            hitDuplicate = true;
            } 
        })
        if(completedSlides.length > 0){
          completedSlides.forEach(item => {
            if(item == randomNumber) {
              hitDuplicate = true;
              } 
          })
        }
        if(hitDuplicate == true){
          randomIndex();
        } else {
          completedSlides.push(randomNumber) 
        }
        
      }       
  }
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
  
  carousel.addEventListener("animationend", (animationEvent) => {
    if(animationEvent.animationName === "move_left") {
      carousel.classList.remove("transition_left");
      completedSlides = [];
      randomIndex();
      activeSlides = completedSlides;   
      
      item_active.innerHTML = item_left.innerHTML;   
      

      imgs[0].src = pets[completedSlides[0]].img;
      imgs[1].src = pets[completedSlides[1]].img;
      imgs[2].src = pets[completedSlides[2]].img;

      names[0].innerHTML = pets[completedSlides[0]].name;
      names[1].innerHTML = pets[completedSlides[1]].name;
      names[2].innerHTML = pets[completedSlides[2]].name;  
    } else {
      carousel.classList.remove("transition_right");
      completedSlides = [];
      randomIndex();
      activeSlides = completedSlides;
      
      item_active.innerHTML = item_right.innerHTML;
      

      imgs[6].src = pets[completedSlides[0]].img;
      imgs[7].src = pets[completedSlides[1]].img;
      imgs[8].src = pets[completedSlides[2]].img;

      names[6].innerHTML = pets[completedSlides[0]].name;
      names[7].innerHTML = pets[completedSlides[1]].name;
      names[8].innerHTML = pets[completedSlides[2]].name;  
    }
    prev.addEventListener('click', moveLeft);
    next.addEventListener('click', moveRight);
  })


              const openModal = n => {
                        modal.classList.add('active');
                        body.classList.add('lock');
                    };                    
                  
                btnOpens.forEach((Element) => {
                  Element.addEventListener('click', openModal);
                })

              function closeModal(){
                  modal.classList.remove('active');
                  body.classList.remove('lock');
              }

              overlay.addEventListener('click', closeModal);
              btnClose.addEventListener('click', closeModal);


