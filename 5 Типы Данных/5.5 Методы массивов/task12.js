// Задача 12

// Оставить уникальные элементы массива

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.



function unique(arr) {
  let result = []

  arr.forEach(element => {
    if (!result.includes(element))
      result.push(element)
  })

  return result
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O