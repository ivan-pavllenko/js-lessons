//? Используем объекты

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

//? Функции переделываем в методы
//? У нас есть один большой обьект, который содержит как свойства (который описывают базу данных) так и методы

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyfilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    //! Создадим класический шаблон (тоглер)
    //? Если приватность установлена, мы ее выключаем. Если не будет установлена то включаем
    //? Сейчас сюда if (personalMovieDB.privat) попадает значение false, 
    //? если сюда попадает false - то у нас сработает вторая часть, которая будет с else, потому что условие не выполнится 
    //? Сейчас у нас false, мы должны переключить в позицию true

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    //? В консоль браузера вводим

    // personalMovieDB.start(); //? метод start вызывает нашу базу данных
    // personalMovieDB.toggleVisibleMyDB(); //? запускаем метод toggleVisibleMyDB (база данных станет приватной)
    // personalMovieDB.showMyDB(personalMovieDB.privat); //? запускаем метод showMyDB (база данных скрыта)

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre === null) {
                console.log('Вы ввели не корректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

    //? В консоль браузера вводим
    // personalMovieDB.writeYourGenres(); //? Вводим названия

    //? Получаем
    //? Любимый жанр 1 - это Боевик
    //? Любимый жанр 2 - это Екшен
    //? Любимый жанр 3 - это Комедия

    //! Ещё один вариант как можно реализовать

    // writeYourGenres: function () {

    //     //? цикл запустим один раз, если всё правильно, то он заершится. Но если вдруг нет, то мы откатываемся на один шаг назад и будем задавать вопрос

    //     for (let i = 1; i < 2; i++) {
    //         let genre = prompt(`Введите ваш любимый жанр через запятую`).toLowerCase();

    //         if (genre === '' || genre === null) {
    //             console.log('Вы ввели не корректные данные или не ввели их вообще');
    //             i--;
    //         } else {
    //             personalMovieDB.genres = genre.split(','); //? split разбивает строку на отдельные эл-ты массивов
    //             personalMovieDB.genres.sort();
    //         }
    //     }
    //     personalMovieDB.genres.forEach((item, i) => {
    //         console.log(`Любимый жанр ${i + 1} - это ${item}`);
    //     });
    // }
};



//? Как работает метод sort
//? Нужно учитывать hегистр когда вводится разная информация
//? Если вводить кирилицу ангел, Бабушка
//? Если использовать разные регистры, он по разному сортируется (большая буква Б перебивает маленькую букву а)
//? Сначала идут большие буквы а после маленькие

//? Будет  Бабушка, ангел

//! Берем ту строку которую мы получаем и превращаем её в нижний регистр
//? let genre = prompt(`Введите ваш любимый жанр через запятую`).toLowerCase();


//! Интересное поведение 
//? Когда мы работаем в консоли браузера у нас каждый раз выскакивает undefined
//? Сама по себе команда console.log() ничего не возвращает, она запускается, но не возвращает
//? У нее нет слова return
//? Когда она запускается внутри в консоли браузера она каждый раз выкидывает свойство undefined
//? Тоже самое случается с методами которые мы запускаем (toggleVisibleMyDB, showMyDB) они ничего не возвращают 
//? Поэтому после запуска в консоль браузера возвращается undefined