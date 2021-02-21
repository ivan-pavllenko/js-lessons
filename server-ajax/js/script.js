//! Клиентская и серверная часть
// ?Клиентская часть - это то что видит наш пользователь (кнопки, инпуты)
// ?Серверная чать - это то что пользователь не видит (алгоритмы обработки данных, работа с базами данных)
// ?Между клиентом и сервером постоянно происходит обмен данными
// ? Отправить заявку - заполняем форму, нажимаем кнопку отправить - наш клиент собирает данные и уходит с ними на сервер там уже с ними что то происходит

//! GET и POST запрсы
// ? GET запрос к серверу - это когда клиент приходит к серверу и говорит "отдай мне данные по такому то параметру" пример - "поиск в гугле", "интернет магазин мы приходим и получаем определенные товары"

// ? POST запрос к серверу - когда мы хотим отправить данные на сервер, (мы что то постим на сервер) пример - "регистрация на сайте, заполнение какой нибудь формы" эти данные отправляются на сервер записываются в базе данных и потом эти данные мы можем использовать 

//!  Аjax
//? Технология ajax - позмоляет без перезагрузки страниц получать определённые данные ( пример - гугл карты, товары в интернет магазине подгружаются динамически)
//? Кода мы отправляем запрос чаще всего происходит обновление страницы браузера (перезагрузка)

//? Live Server - поддерживает только GET запросы
//? Формат .json используется для обмениванием данных с сервером

//? function req() будет посылать запрос на сервер
//? XMLHttpRequest() - это обьект который позволяет нам асинхронно общаться з сервером, в этом обьекте есть свои свойства, свои обработчики, свои методы
//? .open - это основной метод в обьекте XMLHttpRequest() - он позволяет настроить наш запрос
//? 1-й аргумент, в нём мы передаем название нашего запроса
//? 2-й аргумент, в нем  адресс по которому мы будем посылать запрос
//? мы должны прийти к серверу и попросить у него адрес к определённым данным, так же можно запостить какие то данные, которые в будущем будут отображаться в базе данных


//? открываем терминал и запускаем сервер json-server --watch db.json и получаем адресс
//? получаем адресс http://localhost:3000 и http://localhost:3000/people
//? адрес http://localhost:3000/people получился из за того что у меня в базе данных есть значение people 
//? Если я буду обращаться по этому адресу, то я могу взаимодействовать с массивом, масив у нас с обьектами, который находится внутри
//? Я могу получить эти данные каждый отдельный обьект "name": "John","surname": "Smith","sex": "male",

//? Мне необходимо установить заголовки которые будут прикреплены к данному запросу
//? Заголовки помагают серверу понимать, а с какими данными он сейчас вообще работает
//? Заголовок .setRequestHeader содержит аргумент Content-type со значением application/json;charset=utf-8

//? После того как наш запрос создан, мы сказали с чем будем работать нам его необходимо отправить
//? Мы берем из клиента и тправляем этот запрос на сервер

//? Если бы у нас был POST запрос, мы какие то данные постили то нам нужно было бы передать дуда
//*request.send(body);
//? какие то данные которые мы бы постили

//? Запрос ушел, теперь мы можем как то с ним взаимодействовать 
//? Существуют такие стадии запроса UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE
//? readystatechange - обработчик событий, позволяет отслеживать стадии нашего запроса и взависимо от стадии что- то выполнять
//? В нашес случае нас интересеет последний этап DONE, когда все данные уже готовы к работе
//? Но не всегда, иногда мы можем использовать промежуточные стадии
//? В свойстве readyState (состояние готовности) - лежат стадии загрузки
//? readyState должен быть строго равен === 4, (4- это стадии запроса)
//? В свойстве status - лежит код статуса
//? Код статуса 200 говорит что у нас всё хорошо
//? Мы работаем в json файле, json сервер выдаёт там тоже в json фрмате
//? Чтобы его использовать на клиенте при помощи js я должен его распарсить
//? Распарсить - превратить json формат в обычные обьект или массив который можно использовать на нашем клиенте внутри js
//? Команда JSON.parse парсит данные
//? Свойтсво response - встроенная возможность внутри XMLHttpRequest,в ней содержится ответ от сервера который был получен, превращает его ответ в обычный массив или обьект js, помещаем в перем data и можем его использовать

//? Консоль выводит ошибку "Что-то пошло не так"
//? Когда мы используем условие, мы отслеживаем все изменения статуса нашего запроса readystatechange, а запрос получает результат не мгновенно, он проходит через разные стадии 
//? Когда мы наш запрос отправили request.send(), он проходит через стадии readyState === 1, readyState === 2, readyState === 3, readyState === 4
//? Каждый раз когда менялась стадия запроса у нас срабатывал этот обработчик события readystatechange, в нем происходило условие и 2 раза он нам выводил ошибку

//? Можно использовать более проще вместо обработчика событий readystatechange назначить load
//? readystatechange - отслеживает стадии 
//? load - не позволяет отслеживать стадии, он сработает только тогда когда readyState === 4

//* request.addEventListener("load", function () {
//*   if (request.status == 200) {
//*    let data = JSON.parse(request.response);
//*     console.log(data);
//*   } else {
//*     console.error("Что-то пошло не так");
//*   }
//* });
//* }
//* req();

//? Когда мы получили данные, они находятся в переменной data, мы можем их как то использовать, вариантов множество: для того чтобы создать новые эл-ты на странице, вывести эти данные на страницу

//! Выводим карточки которые будут показывать информацию о людях, и будем использовать те данные которые пришли от сервера
//? В переменной data находятся данные которые пришли из сервера
//? data - это массив, а значит мы должны использовать меоды перебора массива forEach
//? Метод forEach - позволяет без изменения исходного массива, перебрать каждый эл-т массива и выпонить операции
//? Будет один аргумент item - он будет обозначать каждый эл-т внутри массива 
//? Создаем переменную card, она будет существовать только внутри этерации одного цыкла 
//? С помощью innerHTML мы можем какую-то  HTML структуру поместить внутри нового эл-та
//! В item лежат обьекты - это разные люди,
//! а в обьектах есть разные свойства - photo, name, surname, age
//? Внутри data - массив, в массиве - обьекты, а эти обьекты расскидываем по разным кусочкам
//? Аргумент ${item.photo} будет динамически подставлятся из базы данных


window.addEventListener("DOMContentLoaded", () => {
  function req() {

    const request = new XMLHttpRequest(); //? в переменную поместим конструктор нового обьекта new XMLHttpRequest
    request.open("GET", "http://localhost:3000/people"); //? я буду при помощи  Аjax запросов делать GET
    request.setRequestHeader("Content-type", "application/json;charset=utf-8"); //? установим заголовок 
    request.send();

    //? Чтобы взаимодействовать с запросом используем обработчик собыий
    request.addEventListener("readystatechange", function () {

      //? Здес мы можем ловить стадии загрузки, если 2 условия выполнятся, мы будем выполнять действие 
      if (request.readyState === 4 && request.status == 200) {
        let data = JSON.parse(request.response);
        console.log(data); //? Выведим в консоль те данные которые приходят от сервера 

        data.forEach(item => {

          let card = document.createElement('div'); //? Создаем элемент

          card.classList.add('card'); //? Задаем класс эл-ту

          //? В зависимомти от пола иконка будет изменятся
          let icon;
          if (item.sex === "male") {
            icon = "icons/mars.png";
          } else {
            icon = "icons/female.png";
          }

          //? Запоняем эл-т ,Помещаем HTML код внутри созданного элемента с помощью бектиков ``
          card.innerHTML = `
          <img src ="${item.photo}" alt ="photo" />
          <div class="name">${item.name} ${item.surname}</div>
          <div class="sex">
          <img src="${icon}" alt="male" />
          </div>
          <div class="age">${item.age}</div>
          `;
          document.querySelector('.app').appendChild(card); //? Вставляем эл-т в наш HTML файл в блок .app
        });


      } else {
        console.error("Что-то пошло не так");
      }
    });

    //?  this.remove() - говорит что, то на чём произошло событие исчезнет со страницы
    this.remove(); //? Удаляем кнопку после того как мы на неё кликнули, 
  }
  //? Функция req будет выпоняться только при клике на кнопку
  //! У addEventListener есть 3-й аргумент options - это опции которые мы можем передать туда
  //! Опция "once": true - означает что данный обработчик события сработает только один раз

  document.querySelector("button").addEventListener("click", req, {
    "once": true
  });

});