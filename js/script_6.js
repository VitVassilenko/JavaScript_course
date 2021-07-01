/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoItem = document.querySelectorAll('.promo__interactive-item'),
      promoList = document.querySelector('.promo__interactive-list'),
      delItem = document.querySelector('.delete'),
      add = document.querySelector('.add'),
      button = document.getElementById('add-btn'),
      input = document.querySelector('.adding__input'),
      checkbox = document.getElementById('check');

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
let movies = movieDB.movies;

// for (let i = 0, i < delItem.length, i++ ) {
//     delItem[i].addEventListener('click', (e) => {
//     e.preventDefault(),
//     console.log(e.parentNode );
// };
// };
function del (e){
    e.preventDefault(),
    console.log(delItem.parentElement),
    delItem.parentElement.remove();
}
delItem.addEventListener ('click', del);
    
// console.log(delItem);
movies.sort();
console.log(movies);

function addItems() {
    movieDB.movies.forEach( function(item, i){
        return item[i].toLowerCase(); }),
    promoItem.forEach( item => item.remove() ),
    movies.forEach((item, i) => 
    promoList.insertAdjacentHTML(
        `beforeend`, `<li class="promo__interactive-item">${i+1}.${item}<div class="delete"></div></li>`));
    }

addItems();

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
    if(input.value.length >21) {
        movies.push( input.value.slice(0, 21) + '...');
    } else {
        movies.push(input.value);
    }
    movies.sort();
    promoList.innerHTML = '';
    addItems();
    if(checkbox.checked) {
        console.log('Добавляем любимый фильм');
    } else {
        
    }
    console.log(movies);
    input.value = '';  
});

