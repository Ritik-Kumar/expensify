// const person = {
//   name: 'Ritik',
//   age: 20,
//   location: {
//     city: 'Kapurthala',
//     temp: 92
//   }
// }

// const { name: first = "hi", age } = person;
// const { city, temp } = person.location;
// console.log(`${first} is ${age} year old and lives in ${city}`);

// const Book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = Book.publisher;

// console.log(publisherName);

// 
// Array Destructuring
// 

// const address = ['1299 S Juniper Street', 'Philadopia', 'Punjab']

// const [, city = 'kapurthala', state] = address

// console.log(`you are in ${city} ${state}`)

// const itemarray = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// const [item, , medium,] = itemarray;
// console.log(`Item: ${item} of medium size will cost ${medium}`);