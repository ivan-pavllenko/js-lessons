//? Чтобы скрипт не сломался во время подгрузки страницы используют DOMContentLoaded
//? Скрипт запускаем только только тогда, когда страница наша загрузилась (готова)!
//? DOMContentLoaded - это значит что наш скрипт будет запускаться только только тогда, когда дом полностью построен,все теги существуют на странице!

window.addEventListener('DOMContentLoaded', function () {

  //? Обращаемся к элементам на странице
  let products = document.querySelectorAll('.product'),
    buttons = document.querySelectorAll('button'),
    openBtn = document.querySelector('.open');

  //? Создаем динамически корзину
  function createCart() {

    //? Чтобы создать корзину понадобиться:
    //? сама корзина - cart
    //? участок куда будет складываться эл - field
    //? заголовок - heading
    //? кнопка чтобы закрывать корзину -closeBtn

    //? createElement -метод который позволяет создавать новые теги, новые эл-ты на странице

    let cart = document.createElement('div'),
      field = document.createElement('div'),
      heading = document.createElement('h2'),
      closeBtn = document.createElement('button');


    //? Добавляем class элементам корзины
    //? classList - свойство с помощью которого можно добавлять, удалять, проверять class 

    cart.classList.add('cart');
    field.classList.add('cart-field');
    closeBtn.classList.add('close');

    //? textContent - метод позволяет поместить текст внутрь эл-та 

    heading.textContent = " В нашей кoрзине";
    closeBtn.textContent = "Закрыть";

    //? appendChild - позволяет вставить эл-т который был создан в js на страницу к любой другой эл-т
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }

  //? Вызываем функцию createCart
  createCart();

  //? Эти переменные создаются после того как наша корзина была создана
  let field = document.querySelector('.cart-field'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.close');

  //? ф-я открытия корзины
  function openCart() {
    cart.style.display = 'block';

  }

  //? ф-я закрытия корзины
  function closeCart() {
    cart.style.display = 'none';
  }

  //? Когда я кликаю на кнопку  openBtn будет срабатывать ф-я openCart
  openBtn.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);

  //! ТЗ что нужно сделать, проговариваем в голове!
  //? У нас еть 8 кнопок Купить, на каждую из них мы должны привязать обработчик событий
  //? Когда мы кликаем на кнопку, мы берем элемент и перемещаем его в корзину, мы это делаем при помощи клона 
  //? Берем клон товара и перемещаем его в корзину, а сам товар удаляем + удаляем кнопку купить

  //! 2 способа реализации

  //? используем цикл for, let цикл будет работать до тех пор, пока кнопки не закончатся
  //? все кнопки лежат в псевдомасиве buttons = document.querySelectorAll('button')
  //? На каждую кнопку которая будет перебераться в псевдомасиве  buttons[i], мы навешиваем обработчик событий, этот обработчик будет кликом 'click' и говорим что будет выполняться какая то ф-я

  //? При клике на кнопку произойдут действия:
  //? Создадим пер-ную item, в неё будем помещать клон нашего товара
  //? В пер-ной  products лежит каждый отдельный товар, нумерация кнопок совпадает с нумерацией товара и мы можем использовать это в коде
  //? При клике на [i]-ю кноку мы берем products и используем тот же индекс [i]
  //? Если мы нажали на 1-ю кнопку, мы возьмем продукт под номером 1 и говорим cloneNode
  //? cloneNode - метод который позволяет клонировать эл-т со страници, 
  //? пареметр (true)  позволяет сделать глубокое копирование, возьмет всю верстку которая нах-ся внутри 
  //? Создаем переменную  btn для того чтобы удалить кнопку в корзине
  //? Внутри клона нахожу кнопку и удаляю её
  //? берем переменую item находим внутри кнопку button и идаляем её
  //? Для поиска кнопки используем querySelector, не на всем документе а только в определенном блоке
  //? В каждом клонированном элте кнопка будет только одна поэтому мы спользуем querySelector
  //? remove - метод удаляет эл-т со страницы

  //! 1-й способ, более старый

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let item = products[i].cloneNode(true),
        btn = item.querySelector('button');
      btn.remove();
      field.appendChild(item); //? во снутрь field помещаем эл-т item, клон который мы сделали
      products[i].remove(); //? удаляем старый продукт со страницы
    });
  }


  //! 2-й способ, более современный
  //? Особенность метода querySelectorAll - когда мы ролучаем массив эл-та, там получается псевдомасив, то у него появляется дополнительный метод, котогого нет у псевдомасивах getElementsByClassName - называется такой метод - forEach
  //? метод forEach - позволяет без помощи циклов также перебрать эл-ты, которые находятся внутри массива
  //? метод forEach принимает ф-ю, и она содержит максимум 3 аргумента, можно использовать только один
  //? 1-й агрумент (item) обозначает каждый эл-т перебираемый в массиве, 1я кнопка, 2я кнопка и тд...
  //? 2-й агрумент (i) индекс перебирального эл-та, 1й элемент, 2й элемент и тд...
  //? 3-й агрумент  обозначает весь массив который мы перебираем, сейчас у нас buttons, в нашем скрипте он не используется, поэтому я его пропущу

  //? вместо function можно использовать стрелочные ф-и => - это новый формат ф-й
  //? у стрелочных ф-й есть свои особенности, она создавалась для того чтобы мы могли её использовать в более современных проектах, не всегда можно поменять обычную ф-ю на стрелочную 

  buttons.forEach(function (item, i) {
    item.addEventListener('click', function () {
      let item = products[i].cloneNode(true),
        btn = item.querySelector('button');
      btn.remove();
      field.appendChild(item);
      products[i].remove();
    });

  });

  // buttons.forEach((item, i) => {
  //   item.addEventListener('click', () => {
  //     let item = products[i].cloneNode(true),
  //       btn = item.querySelector('button');
  //     btn.remove();
  //     field.appendChild(item);
  //     products[i].remove();
  //   });

  // });



});