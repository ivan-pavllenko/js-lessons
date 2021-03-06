/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...',
    ],
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

//? 1)

//? adv.remove(); не сработает, потому что внутри adv лежит html коллекция (псевдомассив)
//? Мы не можем удалить псевдомассив, у него не существуетметодов


adv.forEach((item) => {
    item.remove();
});

// adv.forEach(function (item) {
//     item.remove();
// });

//? 2)

//! Свойство textContent - позволяет поменять текст у эл-та

genre.textContent = 'Драма';

//? 3)

//? Путь к картинке будет относительно html файла, index.html
//? Когда мы комбинируем кавычки, нам необходимо использовать разные виды

poster.style.backgroundImage = 'url("img/bg.jpg")';

//? 4)

//? Если записать в innerHTML ничего, то эл-т очистится

//! С помощью innerHTML - можно очистить эл-т

movieList.innerHTML = '';

//! innerHTML - позволяет получить весь контент который нах-ся внутри эл-та со страницы
//* console.log(poster.innerHTML);

movieDB.movies.sort();

//? Нам нужно перебрать все значения которые нах-ся в массиве movies и на их основании сформировать какую то структуру
//? film - каждый отдельный фильм который написан в массиве
//? i - номер по порядку (вывести нумерацию фильмов)

//? Самый оптимизированный способ помещать такие эл-ты и генерировать их вручную это - прописывать их строками и просто добавлять ещё каждый раз строку, когда у нас повторяется цикл
//? Неообходимо всю верстку поместить на страницу

//! +- оператор дополнительного присваивания, говорим что мы добавляем ещё одно число
//* a = a + 1;
//* a += 1;

//* a = a + 'aaa';
//* a += 'aaa';

//? У нас есть блок movieList, мы его почистили movieList.innerHTML = '';
//? Чтобы туда поместитить html код прописываем innerHTML

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li li class = "promo__interactive-item" > ${i + 1} ${film}
            <div class = "delete"></div> 
        </li>
    `;
});