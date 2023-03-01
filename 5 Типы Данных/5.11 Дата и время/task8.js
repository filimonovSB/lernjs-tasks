// Задача 8

// Форматирование относительной даты

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  let difference = new Date() - date

  if (difference < 1000) return 'Прямо сейчас'

  let seconds = Math.floor(difference / 1000)

  if (seconds < 60) return `${seconds} сек. назад`

  let minuts = Math.floor(difference / 60000)

  if (minuts < 60) return `${minuts} мин. назад`

  let formatDate = [
    '0' + date.getDate(),
    '0' + (date.getMonth() + 1),
    '' + date.getFullYear(),
    '0' + date.getHours(),
    '0' + date.getMinutes(),
  ]

  formatDate = formatDate.map(element => element.slice(-2))

  return formatDate.slice(0, 3).join('.') + ' ' + formatDate.slice(3).join(':')

}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата 
console.log(formatDate(new Date(new Date - 86400 * 1000)));