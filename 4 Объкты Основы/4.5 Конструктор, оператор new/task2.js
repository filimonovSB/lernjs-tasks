// Задача 2

// Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


function Calculator() {

  this.read = read
  this.sum = sum
  this.mul = mul

  function read(arg1, arg2) {
    this.arg1 = arg1
    this.arg2 = arg2
  }
  function sum() {
    return this.arg1 + this.arg2
  }
  function mul() {
    return this.arg1 * this.arg2
  }
}

let calc = new Calculator()

calc.read(6, 10)

console.log(calc.sum())
console.log(calc.mul())
