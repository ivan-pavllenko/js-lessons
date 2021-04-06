//? Новый стандарт не поддерживается в старых версиях браузера (пример пер-я let)
//? Есть дерективы которые в автоматическом режиме переводиn в новый формат из старого
//? Деректива -"use strict" говорит файлу js что мы работаем в современном режиме, используем в начале файла js
"use strict";

//! Переменные var, let, const
//! Три способа обьявить переменные - var, let, const
//? Имя переменной может состоять из букв, цифр, символов $ _  и первый символ никогда не должен быть цыфрой 
//? Названия переменных не должны повторять зарезервированные слова в языке errror prompt

//! Переменные var - устаревшее, мы не должны её использовать 
//? у неё есть хостинг (всплытие переменых), создается до того как наш скрипт начал работать, работает до того как была обьявлена в коде и видна она везде

console.log(yourName); //? Будет undefined - не ошибка, а какое-то значение, нерпавильное поведение с точки зрен логики
yourName = 'Alex';
var yourName = 'Tom';

var yourName = 'Tom'; //? создали (обьявили) переменную и поместили в неё данные
yourName = 'Alex'; //? перезаписали переменную
console.log(yourName); //? вывели в консоль, Alex

//! Переменные let - изменяемая, мы её можем перезаписать
//? Создали переменную, только потом её можно использовать (позволяет избежать ошибки)
let numb = 10; //? создали (обьявили) переменную и поместили в неё данные
numb = 15; //? перезаписали переменную
console.log(numb); //? вывели в консоль, 15


//! Переменные const - константа, её значение поменять не можем, 
//? Создали переменную, только потом её можно использовать
//? Хорошим тоном является использовать const везде где это возможно
const pi = 3.14;
const leftBorderWidth = 1;

//? Особенность const, как таковых констант в js не существует
const obj = {
  a: 50
};

obj.a = 20;
console.log(obj); //? Будет a: 20 изменили константу


//? Ещё один способ поместить данные в переменную
let message; //? создали (обьявили) переменную
message = 'Hello!'; //? поместили в неё данные исользуя оператор присваивания =

//? Переменные  let, const - видны только в блоке с кодом ограниченными фигурными скобками {}
{
  let result = 50;
}
console.log(result); //? пер-я result не видна

//? Переменная var  - видна вне блока с кодом  ограниченными фигурными скобками {}
{
  var results = 50;
}
console.log(results); //? пре-я result видна