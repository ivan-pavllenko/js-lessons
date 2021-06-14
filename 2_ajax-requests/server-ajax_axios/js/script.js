//! Аxios
//? Если библиотека axios уже подключена к нашему проекту, мы можем её использовать
//? Аxios - автоматически конвертирует все данные которые пришли из json в самый обычный обьект , пожтому мы можем просто взять и вернуть  return res(); результат который у нас получился
//? Когда мы получаем ответ от сервера, он действительно автоматически  преобразует из json в обычный обьект, но и кроме всего у нас там много других технических данных которых мы не хотим использовать
//? Поэтому вместо createCards(data) мы используем createCards(data.data)



window.addEventListener("DOMContentLoaded", () => {
  function req() {

    //   const request = new XMLHttpRequest();
    //   request.open("GET", "http://localhost:3000/people");
    //   request.setRequestHeader("Content-type", "application/json;charset=utf-8"); //? установим заголовок 
    //   request.send(); //? запрос ушел на сервер

    //   request.addEventListener("load", function () {
    //     if (request.status == 200) {
    //       let data = JSON.parse(request.response);
    //       console.log(data);
    //       createCards(data);

    //     } else {
    //       console.error("Что-то пошло не так");
    //     }
    //   });


    // fetch("http://localhost:3000/people")  //? запрос к серверу
    // .then(data => data.json()) //?превращаем данные из формата json в обычный обьект
    // .then(data => console.log(data)); //? выводим данные в консоль

    getResourse("http://localhost:3000/people") //? запрос к серверу
      .then(data => createCards(data.data)) //? мы получаем данные и записываем их в data
      .catch(err => console.error(err)); //? при помощи catch обработаем ошибку


    this.remove(); //? Удаляем кнопку после того как мы на неё кликнули, 
  }

  document.querySelector("button").addEventListener("click", req, {
    "once": true
  });

  // async function getResourse(url) {
  //   const res = await fetch(`${url}`);

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${res.status}`);

  //   }

  //   return await res.json(); //?  await говорит, дождись завершение операции res.json() и только потом возвращай
  // }

  async function getResourse(url) {
    const res = await axios(`${url}`);

    //? если res.status  не равен 200, то мы будем выдавать ошибку
    if (res.status !== 200) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);

    }

    return res(); //?  вернем результат который у нас получился
  }

  function createCards(response) {
    response.forEach(item => {

      let card = document.createElement('div');

      card.classList.add('card');

      let icon;
      if (item.sex === "male") {
        icon = "icons/mars.png";
      } else {
        icon = "icons/female.png";
      }

      card.innerHTML = `
          <img src ="${item.photo}" alt ="photo" />
          <div class="name">${item.name} ${item.surname}</div>
          <div class="sex">
          <img src="${icon}" alt="male" />
          </div>
          <div class="age">${item.age}</div>
          `;
      document.querySelector('.app').appendChild(card);
    });



  }
});