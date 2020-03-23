// console.log('INIT!');
import {
  createPager
} from './pager.js';

const slideShowRoot = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slideshow__slide');
const [prevControl, nextControl] = document.querySelectorAll('.slideshow__control');
console.log(prevControl, nextControl);
let activeSlideIndex = 0;


function toogleOnNext() {
  const activeSlides = slides[activeSlideIndex];
  activeSlides.classList.add('slide_active');
};

function toogleOffPrev() {
  const activeSlides = slides[activeSlideIndex];
  activeSlides.classList.remove('slide_active');
};

function increaseIndex() {
  if (activeSlideIndex + 1 < slides.length) {
    activeSlideIndex++;
  } else {
    activeSlideIndex = 0;
  }
};

function decreaseIndex() {
  if (activeSlideIndex - 1 >= 0) {
    activeSlideIndex--;
  } else {
    activeSlideIndex = slides.length - 1;
  }
};

function onNextButtonClick() {
  toogleOffPrev();
  increaseIndex();
  toogleOnNext();
};

function onPrevButtonClick() {
  toogleOffPrev();
  decreaseIndex();
  toogleOnNext();
};

function addDynamicStyles() {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.classList.add('animate')
    slide.style.transform = `translateX(-${100 * i}%)`;
  }
}

function setSlide(newIndex) {
  toogleOffPrev();
  activeSlideIndex = newIndex;
  toogleOnNext();

}

function initSlider() {
  createPager(slideShowRoot, slides.length, setSlide);
  addDynamicStyles();
  addEventListeners();
}

function addEventListeners() {
  prevControl.addEventListener('click', onPrevButtonClick);
  nextControl.addEventListener('click', onNextButtonClick);
}

export {
  initSlider
}