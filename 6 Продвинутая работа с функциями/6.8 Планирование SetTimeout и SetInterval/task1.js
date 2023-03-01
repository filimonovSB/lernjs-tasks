// Задача 1

// Вывод каждую секунду

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  let count = from
  let clear = setInterval(() => {
    console.log(count++)
    if (count > to)
      clearInterval(clear)
  }
    , 1000)

}

printNumbers(1, 5)

function printNumbersRecursive(from, to) {
  let count = from
  setTimeout(function go() {
    console.log(count)
    if (count < to) {
      setTimeout(go, 1000);
    }
    count++;
  }, 1000);
}
printNumbersRecursive(1, 5)