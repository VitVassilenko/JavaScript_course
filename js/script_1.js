let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let filmName = prompt("Один из просмотренных фильмов?", "");
let filmRate = prompt("На сколько оцените его?", "");

let filmName2 = prompt("Один из просмотренных фильмов?", "");
let filmRate2 = prompt("На сколько оцените его?", "");

let personalMovieDB = {

    count: numberOfFilms,
    movies:{
        [filmName] : filmRate,
        [filmName2] : filmRate2,
    },

    actors:{

    }, 

    genres: [],
    privat: false
};



console.log(numberOfFilms);
console.log(personalMovieDB.movies);