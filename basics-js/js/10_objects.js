'use strict';
//! Объекты, деструктуризация объектов
//? Объекты записываются в формате ключ-значение, ключ это свойство

const options = {
  name: 'test',
  width: 1920,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

//? Достучаться к свойству можем при помощи . или []
//* console.log(options.name);
//* console.log(options['width']);

//? Вложенный (двойной) доспут, получить значение ключа border которое находится в colors
//* console.log(options['colors']['border']); 
//? будет black

//* console.log(options.colors.bg);
//? будет red

//? delete - позволяет удалить свойство (ключ - значение)
//* delete options.height;

//* console.log(options);

//! Конструкция for in позволяет перебрать все свойства обьекта
//? key - название каждого свойства (ключа), мы эти ключи будем перебирать
//? key говорит что мы будем копаться внутри options
//? Внутри действие, которое будет повторяться каждый раз
//? цикл будет работать столько раз сколько свойств внутри этого обьекта
//? key - получить ключ 
//? options[key] - получить значение ключа который будет перебираться в цикле

//* for (let key in options) {
//*   console.log(`свойство ${key} имеет значение ${options[key]}`);
//* }

//! Запустим код
//? свойство name имеет значение test
//? свойство width имеет значение 1920
//? свойство height имеет значение 1024
//? свойство colors имеет значение [object Object]

//! JS не может этот обьект превратить в строку [object Object]
//? Когда будем перебирать ключи, мы их можем проверять при помощи условий
//? Если значение ключа будет обьектом мы запустим перебор внутри перебора
//? i - ключи внутри встроенных обьектов: border, bg
//? options[key][i] - вложенный (двойной) доступ, получить значение ключа i которое находится в key
//? 2 раза обращаемся к разным ключам 

//! Получаем
//? свойство border имеет значение black
//? свойство bg имеет значение red

let counter = 0;
for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

//! Методы и свойства обьектов все запоминат не нужно
//! У обьектов нет свойства length
//? Можно создать пер-ю которая будет счетчиком, она будет подсчитывать сколько свойств будет внутри

console.log(counter); //? будет 5, что нам не подходит

//? Классический метод узнать какое кол-во свойств нах-ся в обьекте

//* let counterr = 0;
//* for (let key in options) {
//*   counterr++;
//* }

//* console.log(counterr);

//? Метод Object.keys - ключи нашего обьекта
//? Этот метод берет наш обьект и на его основании создает массив в котором все эл-ты это ключи нах-ся в первой части пры ключ-значение: name width height colors

const option = {
  name: 'test',
  width: 1920,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('Test');
  }
};

//? Получаем массив с ключами
console.log(Object.keys(option)); //? Будет массив [ 'name', 'width', 'height', 'colors', 'makeTest' ]

//! Запомнить этот прием
//? С помощью length получаем кол-во эл-в которые будут в этом массиве
console.log(Object.keys(option).length); //? Будет 5

//? Мы можем создавать такие методы вручную самостоятельно
//? Методы это действие которое умеет совершать наш обьект
//? Создадим метод makeTest, он точно такой же как метод keys
//? Только метод makeTest мы создаем самостоятельно, а метод keys уже встроенный
//? Чтобы наш обьект умел что-то делать, мы можем внутрь его записать ф-ю

option.makeTest(); //? запускаем метод

//! Деструктуризация обьектов
//? Чтобы не писать каждый раз
//* console.log(options['colors']['border']);
//? Мы будем вытаскивать пер-е: border и bg в качестве отдельных структур, которые мы будем выносить за наш обьект и как то их использовать

//! Приступим к деструктуризации
//? Создадим пер-ю const, во внутрь {} положем те пер-е которые я хочу вытащить {border и bg}
//? = помещаем ту структуру из которых мы хотим вытащить эти обьекты, тоесть их дестр-вать - разделить на более мелкие кусочки

const {
  border,
  bg
} = option.colors;

//? Мы вытащили свойства border и bg в качестве отдельных пер-х

console.log(border); //? будет black

//?  Всё идет от обьектов
//?  Строка на базовом уровне является обьектом


const codes = {
  "+7": "Россия",
  "+38": "Украина",
  "+1": "США"
};

for (let code in codes) {
  let value = codes[code];
  code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7

  console.log(code + ": " + value); // 7, 38, 1 во всех браузерах
}