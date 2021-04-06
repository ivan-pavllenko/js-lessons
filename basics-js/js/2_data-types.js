"use strict";
//! Типы данных, на дынный момент существует 8 типов данных
//? Простые (примитивы) - Числа, Строки 'string', Логический тип (boolean), true/false, null, undefined, Symbol, BigInt
//? Обьекты (комплексные) - спецобьекты, обычные обьекты 
//? Обьекты - спецобьекты - Массивы [], Функции function, Обьект Даты, Регулярные выражения, Ошибки  

//! Числа 
//? Числа могут быть как целые так и дробные
let number = 4.6;

//? Infinity - это числовой тип данных, которое обозначает безконечность, относятся к примитивам - числам
console.log(4 / 0);

//? NaN - не число, получаем не математическое действия
console.log('string' * 9);

//! Строки
//? Обязательным атрибутом являются кавычки '' или ""
//? Строки внутри себя могут содержать и числа '7'
const person = 'Alex';

//! Логический тип, булевые значения - либо да либо нет true/false
let bul = true; //? логический тип, булевые значения

//! null это когда чего то просто не существует, переменная не обьявлена
modall = 'string';
alert(a);
console.log(something);

//! undefined это когда существует, но значения не имеет (пустая коробка)
let modal;
console.log(modal);


//! Обьекты - это коллекция данных, структура которого используется для хранения любых данных
//? Обьекты состоят из свойств (модель, вес, мощность) и методов ( то что умеет делать, пылесос – пылесосить)
const obj = {
  name: 'Martin', //? Свойство name, значение свойства Martin (формат - ключ/значение)
  age: 27,
  isMarried: false
};

console.log(obj.name); //? Через . можем обратьтся к определённому свойству
// console.log(obj['name']); //? Через [] можем обратьтся к определённому свойству


//! Массивы - разновидность обьектов
//? Массивы - частый случай обьектов, используется для хранения данных строго по порядку
//? В массив можно поместить любой тип данных
//? Массив похож на обьект но при этом ключ всегда фиксирован - это номер по порядку
//? Ключ задан по умолчанию, на них мы влиять не можем 0: 'plum.png', 1: 7,  2: 'orange.png'
//*             0      1        2         3     4  
let arr = ['plum.png', 7, 'orange.png', false, {}];
console.log(arr[0]);
arr = [0]; //? получить первый элемент
arr[1] = 2; //? перезаписали второй элемент в массиве