// Задача 4

// Вывод односвязного списка

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

function printList(list) {
  console.log(`value = ${list.value}`)
  if (list.next)
    printList(list.next)
}

function printListLoop(list) {
  let temp = list
  while (temp) {
    console.log(`value = ${temp.value}`)
    temp = temp.next
  }

}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

console.log('\nВывод списка через рекурсию\n')
printList(list)

console.log('\nВывод списка через цикл\n')
printListLoop(list)