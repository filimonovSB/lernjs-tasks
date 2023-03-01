// Задача 6

// бъектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// Ответ

function showUsers(users) {
  users.forEach(element => {
    console.log(element)
  })
}

function byField(filter) {
  return function (a, b) {
    return (a[filter] > b[filter]) ? 1 : -1
  }
}

// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Можем ли мы сделать его короче, например вот таким?

// То есть чтобы вместо функции мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

console.log(`\nМассив до сортировки\n`)
showUsers(users)

users.sort(byField('name'))
console.log(`\nМассив после сортировки по name\n`)
showUsers(users)

users.sort(byField('age'))

console.log(`\nМассив после сортировки по age\n`)
showUsers(users)

