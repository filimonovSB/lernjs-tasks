// Задача 1 

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...
let collator = new Intl.Collator();
animals.sort(function (a, b) {
  return collator.compare(a, b);
});

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК





