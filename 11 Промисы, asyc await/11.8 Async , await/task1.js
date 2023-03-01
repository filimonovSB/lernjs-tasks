// Задача 1

// Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404


async function loadJson(url) {
  const responce = await fetch(url)

  if (responce.status == 200) {
    let json = await responce.json()
    return json
  }
  else {
    throw new Error(error.status)
  }
}

loadJson('no-such-use.json')
  .catch(alert)