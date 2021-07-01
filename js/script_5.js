/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoItem = document.querySelectorAll(".promo__interactive-item"),
      promoList = document.querySelector(".promo__interactive-list");

promoAdv.forEach( item=> item.remove());

promoGenre.remove();
promoBg.insertAdjacentHTML('afterbegin', '<div class="promo__genre">ДРАМА</div>');
promoBg.style.background = "url('../img/bg.jpg')";
promoBg.style.backgroundPosition = "center top"; 

const movieDB = {
    movies: [
        "Логан",
        "Скотт Пилигрим против...",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
    ]
};
const movies = movieDB.movies;
movies.forEach(function(item, i){
    return item[i].toUpperCase();
});


movies.sort();
console.log(movies);

promoItem.forEach( item => item.remove() );
movies.forEach( (item, i) => 
promoList.insertAdjacentHTML(`beforeend`,
`<li class="promo__interactive-item">${i+1}.${item}<div class="delete"></div></li>`));
