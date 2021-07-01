'use strict';
//! Методы и свойства строк и чисел
//? Методы - это вспомагательные ф-и
//? Свойства - это вспомагательные значения

//! Методы и свойства строк

//! Cвойства строк 
//? Строка имеет только одно свойство length
//? Свойство length - позволяет узнать количество символов в строке
//? С помощью этого свойства можем получить длину строки так и других типов данных

const str = 'test';
console.log(str.length); //? будет 4

//? Кол-во эл-в которые находятся внутри массива

const arr = [2, 8, 10, 14, 20];
console.log(arr.length); //? будет 5

//? Свойства не вызываются, методы будут вызываться

//? Можно в браузере посмотреть как выгледят свойства console.dir(Number);

//? Можно получить часть строки через индекс

const strr = 'test';
console.log(strr[2]); //? будет s, получили 3-ю букву в слове

//? Частая ошибка - нельзя поменять букву (строку напрямую) для этого есть методы
console.log(strr[2] = 'd');


//! Методы строк
//? Все методы пишутся в конце с круглыми скобками (), потому что они выполняют какое то действие над строкой

//! Метод изменения регистра
//?  string.toUpperCase() - возвращает нам новое значение, оно не изменяет строку const string = 'test'; 
//?  И это новое значение мы уже можем использовать, вывести в консоль или засунуть в другую пер-ю

const string = 'teSt';
console.log(string.toUpperCase()); //? будет TEST - превращает строку в верхний регистр
console.log(string.toLowerCase()); //? будет test - превращает строку в нижний регистр
console.log(string); //? teSt

//! Поиск подстроки
//! Метод который позволяет нам найти кусочек строки и сказать с какого индекса (позиции или буквы) она начинается
//? indexOf('fruit') позволяет сказать с какого индекса (позиции или буквы) начинается слово, содержит аргумент
//? Самоё очевидное использование для того чтобы увидеть что этот кусочек там существует 'fruit'
//? Но иногда используется чтобы определить есть ли в этой строке искомое значение (буква или слово)

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //? будет 5, c 5-го индекса (позиции), 5-я буква f
console.log(fruit.indexOf('u')); //? будет 7

//! Остался вопрос. Если строка не изменяемая как мы можем её модифицировать или изменить?

//! Методы которые изменяют строки: всего в js их 3

//?  Метод slice - позволяет вырезать часть строки (слова), содержит 2 аргумента
//?  1-й start - с какой части строки нам необходимо начать вырезать кусочек
//?  2-й end - где закончить вырезать этот кусочек, указываем и то что не включается + 1 индекс (букву)

const logg = 'Hello world!';

console.log(logg.slice(6, 11)); //? будет world

//?  Можно указать только 1-й аргумент и наша строка будет вырезаться до конца
console.log(logg.slice(2)); //? будет llo world!

//?  Этот метод поддерживает и отрицательные значения, тогда он будет начинаться с конца строки
console.log(logg.slice(-5, -1)); //? будет orld

//?  Метод substring  - похож на slice, можно 1-й аргумент задавать больше чем 2-й, не поддерживает отрицательные значения
console.log(logg.substring(6, 11)); //? будет world

//?  Метод substr  - вместо 2-го аргумента указываем длину, сколько символов нам необходимр вырезать 
console.log(logg.substr(6, 5)); //? будет world

//! Методы чисел
//? Для работы с числами в js есть отдельная мини библиотека внутри браузера Math. - напишем  в консоли

//? Метод round - округляет число до ближайшего целого 
const num = 12.2;
console.log(Math.round(num)); //? будет 12

//! Методы которые переводят число в другую систему изчисления

const test = '12.2px';

//? Метод parseInt -  строка обрезается и превращается в числовой тип данных
console.log(parseInt(test)); //? будет 12

//? Метод parseFloat - строка обрезается и превращается в числовой тип данных, возвращает значение с точкой
console.log(parseFloat(test)); //? будет 12.2