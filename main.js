/* Задание:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */



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