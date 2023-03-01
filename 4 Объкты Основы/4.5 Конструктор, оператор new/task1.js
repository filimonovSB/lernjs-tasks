// Задача 1

// Две функции - один объект

// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// Ответ да, если они просто будут возвращать стороний объект, только в это м нет смысла

let obj = {}

function A() {
  return obj
}

function B() {
  return obj
}

console.log(new A() == new B());