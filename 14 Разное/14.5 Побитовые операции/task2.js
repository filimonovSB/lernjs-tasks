// Задача 2

// Проверка, целое ли число

// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

// Например:

function isInteger(num) {
  return ~~num === num
}
console.log(isInteger(1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(-0.5)); // false