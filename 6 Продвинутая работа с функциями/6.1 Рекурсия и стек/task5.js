// Задача 5

// Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

function printReverseList(list) {
  if (list.next)
    printReverseList(list.next)
  console.log(`value = ${list.value}`)
}

function printReverseListLoop(list) {
  let arr = []
  let temp = list
  while (temp) {
    arr.push(temp.value)
    temp = temp.next
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`value = ${arr[i]}`)
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



console.log('\nВывод перевернутого списка через рекурсию\n')
printReverseList(list)

console.log('\nВывод перевернутого списка через цикл\n')
printReverseListLoop(list)