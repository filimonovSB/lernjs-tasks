// Задача 4

// Почему наедаются оба хомяка?
// важность: 5
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food]
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat.call(speedy, "apple")

console.log(speedy.stomach) // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach) // apple