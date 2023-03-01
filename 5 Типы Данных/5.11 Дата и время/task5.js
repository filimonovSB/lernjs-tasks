// Задача 5

// Последнее число месяца?

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// Открыть песочницу с тестами для задачи.

function getLastDayOfMonth(year, month) {
  let resultDate = new Date(year, month + 1, 0)
  return resultDate.getDate()
}


console.log(getLastDayOfMonth(2023, 0)) // 31
console.log(getLastDayOfMonth(2023, 1)) // 29
console.log(getLastDayOfMonth(2023, 2)) // 28
