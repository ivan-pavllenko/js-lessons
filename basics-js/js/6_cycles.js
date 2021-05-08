//!Циклы

//? В () мы настраиваем наш цикл, как именно он будет работать. Здесь есть 3 аргумента
//? 1й -- Задание начальной точки, создаем переменную let i = 0
//? 2й -- До какого периода наш цикл будет работать i < 10
//? 3й -- Действие которое будет выполняться в каждой итерации цикла i++

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//? Мы должны настроить цикл, так чтобы этот цикл брал вопрос, доставлял в команду prompt, потом получал ответ и записывал в переменную  answers

//? Нужно сказать циклу, работай до тех пор пока вопросы не закончатся, переменная i когда будет меньше чем элементов в массиве, цикл закончится
//? i++ идин вопрос был нам задан, ответ получили, идём к следующему

//? Свойство length - количество єлементов в массиве (длина массива)

//? Задаю вопрос командой prompt и помещаю ответ в каждый элемент массива по порядку

let answers = [],
  questions = [
    'Как ваше имя?',
    'Как ваша фамилия?',
    'Сколько вам лет?'
  ];
for (let i = 0; i < questions.length; i++) {
  answers[i] = prompt(questions[i], '');
}
console.log(answers);

//? Первый вопрос на который пользователь ответит будет 'Как ваше имя?'. Пользователь на него ответит и в соответсвии в в первую ячейку answers[i] запишется ответ на этот вопрос

//? Виды цыклов

//? Цикл с постусловием
//? Что то должно произойти, а потом выполнится условие. Что то делаем, а потом проверяем

let i = 0;

do {
  console.log(i); //? на этом выводится в консоль
  i++; //? увеличиваем на 1
}
while (i < 10); //? условие при котором цикл остановится

//? Цикл с предусловием
//? Что то выполняю, а потом буду что то проверять

let ii = 0;

while (ii < 10) {
  console.log(ii);
  ii++;
}


//? ДЗ с постусловием

let answer = [],
  question = [
    'Как ваше имя?',
    'Как ваша фамилия?',
    'Сколько вам лет?'
  ];
let iii = 0;
while (iii < questions.length) {
  answer[iii] = prompt(question[iii], '');
}

console.log(answer);


//? Цикл с предусловием - что то выполняю, а потом буду что то проверять

let num = 50;

while (num < 55) {
  console.log(num);
  num++;
}
//? Цикл буудет работать 5 раз: 50 51 52 53 54
//?Если записать while (num <= 55) Цикл буудет работать 6 раз: 50 51 52 53 54 55


//? Цикл с постусловием - что то должно произойти, а потом выполнится условие

let numb = 50;

do {
  console.log(numb);
  numb++;
}
while (numb < 55);




//? Цикл for - классический вариант

let numbb = 50;

for (let i = 1; i < 8; i++) {
  console.log(numbb);
  numbb++;
}

//? Цикл буудет работать 7 раз: 50 51 52 53 54 55 56
//? Не создавать бесконечные циклы вместо 8 написать 0,  i < 0

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}
//? Оператор break - прерывает цикл на этом этапе
//? Цикл будет работать 5 раз: 1 2 3 4 5
//? Как только пер-я i дошла до 6-ки, сработал break и цикл прервался

//? Оператор continue - позволяет пропустить тот шаг который нам не нужен
//? Цикл буудет работать 8 раз: 1 2 3 4 5 7 8 9, пропускаем 6

//? При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//? При помощи цикла for выведите нечётные числа от 1 до 9.

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    console.log(i);
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i); // 1, затем 3, 5, 7, 9
}