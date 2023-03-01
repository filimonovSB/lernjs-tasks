// Задача 2

// Разница между вызовами

// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name)
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi()
Rabbit.prototype.sayHi()
Object.getPrototypeOf(rabbit).sayHi()
rabbit.__proto__.sayHi()

// Ответ
// В первом случае this == rabbit, во всех остальных this равен Rabbit.prototype
// Поэтому вывод будет такой: Rabbit, undefined, undefined, undefined