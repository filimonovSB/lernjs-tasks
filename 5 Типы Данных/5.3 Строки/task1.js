// Задача 1

// Сделать первый символ заглавным

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

function ucFirst(str) {
  return (!str) ? str : str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("Вася"));