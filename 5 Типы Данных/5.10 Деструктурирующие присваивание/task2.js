// Задача 2

// Максимальная зарплата

// У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {

  let nameMax = null
  let max = 0

  for (const [key, value] of Object.entries(salaries)) {
    if (max < value) {
      max = value
      nameMax = key
    }
  }

  return nameMax

}

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
}

console.log(topSalary(salaries))