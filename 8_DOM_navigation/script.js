'use strict';
//! Навигация по DOM - элементам, data - атрибуты, преимущество for of

//? Есть задача, взять определенный эл-т и обратится к его родителю, или к следующему эл-ту и у них поменять класс

//* console.log(document.body);
//* console.log(document.head);

//? В head можем заапендить какой нибудь link который будет подставлять какие то css стили, шрифты подключать и тд

//? Метод documentElement - позволяет получить html со всем содержимым, которое в ней есть
//* console.log(document.documentElement);

//! Родительские эл-ты (внутренности) мы можем получить при помощи 3х команд

//? Метод childNodes - позволяет получить нам все Node (узлы) которые нах внутри этого родителя
//* console.log(document.body.childNodes);

//? Получаем псевдомассив NodeList(6)  [text, div.wrapper, text, comment, text, script]
//? Если мы раскроем мы подучим 8 эл-в, потому что учитывются текстовые Node (узлы) - это переносы строки

//! Разница между DOM элементами и DOM узлами
//? Каждая сущность которая нах на странице будет DOM узламом, но не каждый узел будет эл-том
//? DOM элементы - это всё что мы видим в тегах
//? DOM узлы - это всё что мы не видим (перенос строк, текстовые эл-ты)
//? <li>1</li> <li> это DOM элемент, но внутри него есть текстовый DOM узел 1

//? Метод firstChild - позволяет получить первого ребенка внутри родителя
//* console.log(document.body.firstChild);

//? Метод lastChild - позволяет получить последнего ребенка внутри родителя
//* console.log(document.body.lastChild);

//! Команды которые позволяют получить родителей, соседей и детей

//? Если мы эл-т предполагаем использовать только один раз, то нам его не нужно помещать в пер-ную
//* console.log(document.querySelector('#current'));

//? Эта кнопка лежит внутри родителя first, у меня задача при клике на эту кнопку получить родителя

//? Метод parentNode - позволяет получить родителя
//* console.log(document.querySelector('#current').parentNode);

//? Если команду .parentNode продублируем два раза - то обратимся к следующему родителю по вложенности
//* console.log(document.querySelector('#current').parentNode.parentNode);

//! data - атрибуты
//? data - атрибуты используются для того, чтобы назначить что-то, на что мы сможем ориентироваться
//? data-current="3" первая часть универсальная
//? первая часть универсальная: data- 
//? втарую называем как хотим: current 
//* console.log(document.querySelector('[data-current="3"]'));

//? Метод previousSibling - позволяет получить преведущий эл-т
//* console.log(document.querySelector('[data-current="3"]').previousSibling);

//? Метод nextSibling - позволяет получить следующий эл-т
//* console.log(document.querySelector('[data-current="3"]').nextSibling);
//? Получим текстовую Node (узел) #text

//? Чтобы не получить текстовую Node (узел) используем аналоги

//! У этих команд есть аналоги, которые говорят что мы получаем элемент

//* console.log(document.body.firstElementChild);
//* console.log(document.body.lastElementChild);
//* console.log(document.querySelector('#current').parentElement);
//* console.log(document.querySelector('[data-current="3"]').previousElementSibling);
//* console.log(document.querySelector('[data-current="3"]').nextElementSibling);

//! Преимущество for of

//? Аналога для childNodes нет, его создаем вручную 

//? Использовать for each - мы здесь не можем, используем for of
//? Если при переборе node мы наткнемся на nodeName == '#text' сработает оператор continue
//? оператор continue - позволяет пропустить тестовые узлы

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}

//! Вывод
//? Иногда нам нужно перебрать какие-то эл-ты в псевдомассиве при помощи for of, для того чтобы иметь возможность останавливать цикл или его полностью прервать