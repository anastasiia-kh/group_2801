import {
  MovieBox
} from '../practice_7/movieBox.js'



const slideMovie = document.querySelector('.movie-box-container');
const mainSlideshow = new MovieBox(slideMovie);
mainSlideshow.init();