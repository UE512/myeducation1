'user strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    film1 = prompt('Один из посл фильмов?');
    answer1 = prompt('На сколько его оцените?');
    film2 = prompt('Один из посл фильмов?');
    answer2 = prompt('На сколько его оцените?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [film1] : answer1,
        [film2] : answer2,
    },
    actors: {},
    genres: [],
    privat: false
};



// personalMovieDB.movies = film1;
// personalMovieDB.movies.film1 = answer1;
// // personalMovieDB.movies = film2;
// // personalMovieDB.movies.film2 = answer2;

console.log(personalMovieDB);