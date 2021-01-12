'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const film = prompt("Введите название фильма", ""),
              rating = prompt("Оцените фильм по шкале от 0 до 10", "");
        if (film != null && rating != null && film != '' && rating != '' && film.length <= 50) {
            personalMovieDb.movies[film] = rating;
            console.log('done.');
        } else {
            console.log('error!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10){
        console.log("Вы посмотрели слишком мало фильмов");
    } else if (personalMovieDb.count <= 30){
        console.log("Вы - классический зритель");
    } else if (personalMovieDb.count > 30) {
        console.log("Вы - киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDb.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
    }
}

writeYourGenres();

//console.log(personalMovieDb.movies);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDB(personalMovieDb.privat);