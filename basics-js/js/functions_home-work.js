function myFirsApp(name, age) {
  alert(`Привет, меня зовут ${name} и это моя первая программа!`);

  function showSkills(user) {
    let skills = ['html', 'css', 'js'];
    for (let i = 0; i < skills.length; i++) {
      console.log(user + skills[i]);
    }
  }

  showSkills('Я владею ');


  function checkAge() {
    if (age > 18) {
      console.log('У тебя отличные шансы стать FrontEnd dev!');
    } else {
      console.log('Отлично что ты так рано заботишься о своём будущем!');
    }
  }

  checkAge();

  function calcPow(a) {
    return a * a;
  }
  console.log(calcPow(4));

}

myFirsApp('Ivan', 29);