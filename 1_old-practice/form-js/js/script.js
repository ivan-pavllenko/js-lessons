//? Получить элементы со страницы мы можем с помощью: id, tag, class и css селекторы

//! Способы получения элементов со страницы

//? Для того чтобы получить эл нужно сказать коду, пожалуйста обратись к документу
//? документ - это весь наш html файл
//? Если мы используем getElementById - мы получаем эл только один, он должен быть один на странице, уникальный
//? Если мы говорим коду получи эл через определённый tag, возникает ситуация, напроимер h2 тегов на странице может быть несколько, коду нужна конкретика
//? если обратиться в консоль то получаем не отделный эл а коллекцию [массив данных]
//? HTMLCollection по другому называется псевдомассивом
//? Необходимо указать индекс того эл-ка торого мы хотим использовать


let chooseBtn = document.getElementById('choose'),
  receiveBtn = document.getElementById('receive'),
  heading = document.getElementsByTagName('h2')[0],
  nameInput = document.getElementsByClassName('contactform_name')[0];

console.log(heading);

//? Более новые методы позволяют получать эл-ты при помощи селекторов, селектором может называться что угодно

//? querySelector - позвляет получать 1й (единственный) эл-т со страницы по заданному селектору
//? querySelectorAll- позвляет получать  все эл-ты со страницы по заданному селектору, для того чтобы получить 1й элемент необходимо указать индекс [0]

let phoneInput = document.querySelector('.contactform_phone'),
  mailInput = document.querySelectorAll('.contactform_mail')[0],
  modalBtn = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close'),
  text = document.getElementsByName('message')[0];

console.log(nameInput);
console.log(phoneInput);
console.log(mailInput);
console.log(closeBtn);
console.log(text);

//! События на сайте
//? Действия над эл-ми сайта, отслеживаются браузером и наз - событиями, их можно ловить в коде при помощи встроенных ф-й, которые наз - обработчиками событий

//? События можно использовать 3мя способами

//? Метод textContent - меняет текст
//? когда будет запускаться метод heading.textContent в заголовке будет меняться текст

//? Устаревший вариант, проблема - если один раз назначили ф-ю то потом ни поменять ни удалить мы не сможем
function hover() {
  heading.textContent = 'Действительно всё!';
}

chooseBtn.onmouseenter = hover;
//? hover в () не ставим , потому что событие когда будет выполнятся (onmouseenter), оно само вызовит эту ф-ю

//! Сейчас используется addEventListener

//? Команда addEventListener дословно говорит - что мы должны добавить обработчик событий для элемента chooseBtn
//?  addEventListener принимает 2 аргумента:
//? 1й - это собитие за которым мы будем следить mouseenter
//? 2й - ф-я которая произойдёт когда событае mouseenter выполнится

//? function() - ф-я которая произойдет когда это событие выполнится

//? variant 1

function hover() {
  heading.textContent = 'Действительно всё!';
}

chooseBtn.addEventListener('mouseenter', function () {
  chooseBtn.onmouseenter = hover;
});

//? variant 2

function hover() {
  heading.textContent = 'Действительно всё!';
}

chooseBtn.addEventListener('mouseenter', hover);
//? здесь мы ф-ю hover не вызываем, а передаём ту которая уже есть ( вернее название этой ф-и), эта ф-я (hover) вызовится только тогда когда произойдёт событие mouseenter

//? variant 3

chooseBtn.addEventListener('mouseenter', function () {
  heading.textContent = 'Действительно всё!';
});
chooseBtn.addEventListener('mouseleave', function () {
  heading.textContent = 'Всё включено!';
});

//? Модальное окно
//? Когда я нажимаю на кнопку, выполняется событие click, после того как оно выполнилось запускается ф-я
//? Я получаю эл-т  modalBtn, достукиваюсь до его стилей, беру свойство display и устанавливаю значение block

receiveBtn.addEventListener('click', function () {
  modalBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modalBtn.style.display = 'none';
});

nameInput.addEventListener('input', function () {
  text.value = `Меня зовут ${nameInput.value}. И я хочу спросить:`;
});