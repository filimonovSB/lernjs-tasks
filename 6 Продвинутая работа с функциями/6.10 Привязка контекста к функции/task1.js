// Задача 1

// Связанная функция как метод

// Что выведет функция?

function f() {
  console.log(this)  // ?
}

let user = {
  g: f.bind(null)
}

user.g()

//Ответ выведет null так как мы в контект передали null