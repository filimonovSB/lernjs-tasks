// Задача 2

// Создайте калькулятор

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const calculator = {
  read(arg1, arg2) {
    this.arg1 = arg1
    this.arg2 = arg2
  },
  sum() {
    return this.arg1 + this.arg2
  },
  mul() {
    return this.arg1 * this.arg2
  },

}

console.log(calculator.read(5, 10))
console.log(calculator.sum())
console.log(calculator.mul())
