﻿//! Async, defer, динамические скрипты

//? Браузер загружает страницу сверху - вниз
//? Ошибка новичков: берут <script></script> и помещают в верхнюю часть страницы <head></head>

//? Возникает 2 проблемы: 
//? 1-я снизу страница еще не построилась, если в этом <script> будет взаимодействие с эл-ми которых ещё нет на странице, то будет ошибка
//? 2-я при загрузки наш <script> блокирует страницу (если скрипт большой он будет грузится очень долго тем самым не давая загрузить страницу)

//? 1-ю мы частично решали при помощи 'DOMContentLoaded' - когда у нас скрипт загрузится, то он будет ждать до тех пор пока наша DOM структура полностью не построиться
//? 2-ю мы решить не можем, поэтому <script> помещаем вниз нашей странице 

//? Проблемы возникнут, когда мы начнем работать с большими проектами
//? Построение html структуры занимает какое-то время, а если верстки будет очень много, то скрипт начнется загружатся через какое-то время пользователю это не понравится

//! 2 атрибуа которые решают эту проблему: defer и async

'use strict';

const p = document.querySelectorAll('p');
console.log(p); //? NodeList(2)

//! Атрибут defer - сообщает браузеру что он должен продолжать обрабатывать страницу и загружать <script> в фоновом режиме, а затем запустить этот скрипт когда он загрузится
//? Скрипты с defer никогда не блокируют страницу - страница начинает загружаться, доходит до скрипта, она видит атрибут defer, она говорит браузеру, загружай скрипт в фоновом режиме и начинает дальше строить DOM структуру 

//? Но мы можем спросить ты же сказал что <script> начнет работать как только страница загрузится, а вдруг там структура будет формироваться ещё дальше ?
//? Скрипты с defer всегда выполняются когда наше DOM дерево уже готово, эти скрипты будут дожидаться полной готовности нашей верстки, но при этом они срабатывают до события DOMContentLoaded
//? Скрипты с defer сохраняют порядок относительно друг друга

//? Выполнятся последовательно:  
//? сначала этот <script defer src="script.js"></script>
//? потом этот <script defer src="test.js"></script>

//? Недостаток, если 1-й скрипт большой, а 2-й поменьше, то маленьктй скрипт будет ждать выполнения большого

//! Вывод. Для чего мы можем это всё использовать 
//? Так соблюдается порядок подключения всех утилит и мы точно уверены что страница готова
//? Мы можем сначала подключить биб-ку с полезными утилитами (пример: Jquery), а следующий наш скрипт, который использует возможности этой библиотеки и зависит от неё, при этом вс наша страница не блокируется пока скрипты загружаются паралельно ей 

//! Атрибут async - особенности
//? 1-я страница не ждёт асинхронных скриптов, содержимое просто обрабатывается и отображается
//? 2-я событие DOMContentLoaded и асинхронных скриптов не ждут друг друга

//? Можно сделать вывод, если мы ставим атрибут async, то этот <script> начинает загружаться как только до него доходит страница, он загружается в фоновом режиме, но при этом запускается как только он был загружен, он вообще никого не ждёт

//? 3-я остальные скрипты не ждут async, скрипты с async не ждут остальные скрипты, они становятся абсолютно         независимые

//? Я не буду знать какой скрипт выполнится первым, кто первый загрузился тот и начинает работать

//? Зачем такое поведение нам необходимо?
//? Иногда мы будем подключать сторонние скрипты, которые не особо подвязаны под DOM структуру
//? Например метрики и счетчики, им главное уловить что пользователь зашел на этот сайт

//! Вывод:
//? Когда мы подключаем скрипты с атрибутом async, мы должны точно быть уверены что этот скрипт не зависит от DOM структуры, и кроме того он должен не зависить от каких то других скриптов, он загрузился и сразу выполнился

//! Ещё один способ поместить <script> на страницу
//? Создадим новый эл-т на странице и поместим его туда

// const script = document.createElement('script');
// script.src = 'test.js';
// script.async = false;
// document.body.append(script);

//? Этот скрипт будет загружаться после того, как он будет добавлен в документ
//? после этой строчки document.body.append(script);
//? Динамические скрипты по умолчанию ведут себя как аsync
//? Они никого ждать не будут, скрипт который загрузился 1-м, так и будет загружаться 1-м
//? Чтобы изменить порядок выполнения скриптов при их закгрузки пропишем script.async = false;
//? Наш скрипт будет вести себя как самый обычный скрипт помещенный на страницу

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');

//? Мы создаем ещё два динамических скрипта, которые помещаются у нас на странице
//? Теперь за счет того что мы установили асинхронность false они будут выполнятся строго друг за другом