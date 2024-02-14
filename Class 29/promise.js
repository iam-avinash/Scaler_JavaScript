function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("My Name is alex");
    }, 1000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("My age is 25");
    }, 2000);
  });
}

function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("I am a Accountant");
    }, 600);
  });
}
// Promise all
// Promise.all([p1(), p2(), p3()])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log("Error: " + err);
//   });

// All settled
// Promise.allSettled([p1(), p2(), p3()])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function () {
//     console.log("Error");
//   });

// Any
// Promise.any([p1(), p2(), p3()])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function () {
//     console.log("Error");
//   });

// Race
// Promise.race([p1(), p2(), p3()])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function () {
//     console.log("Error");
//   });

Promise.myAll = function (promiseArr) {
  return new promi();
};
