//! функции

//? В {} действия которые должна эта функция выполнить
//? В () аргументы

// function humanSayHello() {
//   console.log('Hello World!');
// }

// humanSayHello(); //? запускаем функцию

//? Теперь когда я вызову эту функцию я могу передать туда аргумент, не важно что это сейчас, а самое главное что --- "Я могу передать туда что то , и это что то будет использовано во время работы этой ф-и"

function humanSayHello(user) {
  console.log('Hello ' + user + '!');
}

humanSayHello('Ivan'); //? Hello Ivan!

//? Создаем калькулятор
//? Аргументов может быть бесконечное количество, сайчас (a, b)

function calc(a, b) {
  console.log(a + b);
}

calc(4, 5);
calc(4, 8);
calc(14, 5);

//? Основное предназначения ф-и - каждый раз получать новый результат не дублируя код

//? return -- наша ф-я калькулятор посчитает значение a + b и вернет его из нашей ф-и, она может вернуть только ответ, не выводит в консоль, не пишет значене на экран, а просто возвращает число - и теперь мы можем его использовать

function calc(a, b) {
  return a + b;
}
console.log(calc(4, 5));

//? Классификации ф-й
//? Обьявляем ф-ю обычным способом или записываем в формате функционального выражнния

//? function Declaration - можно вызывать ф-ю до её обявления (как var), сначала код создаёт ф-и и потом уже запускает наш скрипт

humanSayHello('Ivan');

function humanSayHello(user) {
  console.log('Hello ' + user + '!');
}

//? function Expression ( функциональное выражение) - переменная cal содержит внутри ф-ю которую мы можем запускать. Создается только тогда когда рабочий код доходит до неё

let cal = function (a, b) {
  return a + b;
}
console.log(cal(4, 5));