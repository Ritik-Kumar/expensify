const promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('This is my resolve data');
  // }, 5000);
  reject('Something went wrong');
});

console.log('before');

promise.then((data) => {
  console.log("1", data);
}).catch((error) => {
  console.log('error :', error)
});


console.log('after');