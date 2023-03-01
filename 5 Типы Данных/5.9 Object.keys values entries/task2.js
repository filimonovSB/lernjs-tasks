// Задача 2

// Подсчёт количества свойств объекта

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

function count(obj) {
  return Object.keys(obj).length
}

let user = {
  name: 'John',
  age: 30
};

console.log(count(user)); // 2
