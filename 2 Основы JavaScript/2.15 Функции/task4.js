// Задание 4

function pow(x, n) {
  if (n <= 0) return `Степень ${n} не поддерживается, используйте натуральное число`
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= x
  }
  return result
}

let x = prompt('Введите x', '')
let n = prompt('Введите n', '')

alert(pow(x, n))