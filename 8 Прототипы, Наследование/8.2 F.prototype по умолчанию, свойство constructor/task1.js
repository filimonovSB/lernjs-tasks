// Задача 1

// Изменяем "prototype"

// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:


// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// }

// let rabbit = new Rabbit()

// console.log(rabbit.eats); // true

// Добавим одну строчку(выделенную в коде ниже).Что вызов console.log покажет нам сейчас ?

// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// }

// let rabbit = new Rabbit()

// Rabbit.prototype = {}

// console.log(rabbit.eats)

// 1 Ответ Покажет true

// …А если код такой(заменили одну строчку) ?

// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// }

// let rabbit = new Rabbit()

// Rabbit.prototype.eats = false

// console.log(rabbit.eats) // ?

// 2 Ответ  false

// Или такой(заменили одну строчку) ?

// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// }

// let rabbit = new Rabbit()

// delete rabbit.eats

// console.log(rabbit.eats) // ?

// 3 Ответ true

// Или, наконец, такой:

function Rabbit() { }
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // ?

// 4 Ответ undefined