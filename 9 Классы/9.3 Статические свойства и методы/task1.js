// Задача 1

// Класс расширяет объект?

// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

// Пример:

// class Rabbit {
//   constructor(name) {
//     this.name = name
//   }
// }

// let rabbit = new Rabbit("Rab")

// // метод hasOwnProperty от Object.prototype
// console.log( rabbit.hasOwnProperty('name') ) // true

// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

// В чем разница?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    super() //Ответ нужно вызвать конструктор родителя
    this.name = name
  }
}

let rabbit = new Rabbit("Кроль")

console.log(rabbit.hasOwnProperty('name')) // Ошибка

// Ответ разница втом что class Rabbit.__proto__ = Frunction.prototype
// А class Rabbit extends Object это Rabbit.__proto = Object