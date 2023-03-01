// Задача 1

// Работа с прототипами

// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода ?

let animal = {
  jumps: null
}

let rabbit = {
  __proto__: animal,
  jumps: true
}

console.log(rabbit.jumps); // Ответ true

delete rabbit.jumps;

console.log(rabbit.jumps); // Ответ null

delete animal.jumps;

console.log(rabbit.jumps); // Ответ undefuned

// Должно быть 3 ответа.