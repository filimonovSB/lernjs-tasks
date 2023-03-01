// Задача 1
// Обязателен ли "else" ?

//   Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
// Будет ли эта функция работать как - то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
// Есть ли хоть одно отличие в поведении этого варианта ?

// Ответ: Разницы нет функции выполняться одинаково 