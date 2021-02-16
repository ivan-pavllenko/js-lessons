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

//? length -- количество єлементов в массиве (длина массива)

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
} while (i < 10); //? условие при котором цикл остановится

//? Цикл с предусловием
//? Что то выполняю, а потом буду что то проверять

let ii = 0;
while (ii < 10) {
  console.log(ii);
  i++;
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

//? ДЗ с предусловием