'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmOne = prompt("Введите название фильма", ""),
      ratingOne = prompt("Оцените фильм по шкале от 0 до 10", ""),
      filmTwo = prompt("Введите название фильма", ""),
      ratingTwo = prompt("Оцените фильм по шкале от 0 до 10", "");

personalMovieDb.movies[filmOne] = ratingOne;
personalMovieDb.movies[filmTwo] = ratingTwo;

console.log(personalMovieDb.movies);
