// Задача 1

// Eval-калькулятор
// важность: 4
// Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического выражения и возвращает результат его вычисления.

// В этой задаче нет необходимости проверять полученное выражение на корректность, просто вычислить и вернуть результат.

let exression = prompt('Введите арифметическое выражение', '')
alert(eval(exression))