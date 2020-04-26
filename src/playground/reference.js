// child remoed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


// child remoed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child remoed
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   });

database.ref('expenses').push({
  description: 'Food',
  amount: 1200,
  createdAt: 0,
  note: ''
});













//database.ref('notes/-M5hA183ZGkRc0ru3bYV').remove();
// database.ref('notes').push({
//   title: 'Course Topic',
//   body: 'Angular, Python, React Native'
// })
// database.ref('notes').set(notes);
// const msg = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   const data = `${val.name} is a ${val.job.title} in ${val.job.company}`;
//   console.log(data);
// });

// setTimeout(() => {
//   database.ref('name').set('Ritik Kumar');
// }, 3500);

// setTimeout(() => {
//   database.ref().off(msg);
// }, 7000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (e) => {
//   console.log('Error in console Logging', e);
// });

// setTimeout(() => {
//   database.ref('age').set('29');
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set('30');
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error : ", e);
//   })

// database.ref().set({
//   name: 'Ritik Kumar',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Kapurthala',
//     country: 'INDIA'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('failed');
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('removed');
// }).catch((error) => {
//   console.log('cannot remove', error);
// });