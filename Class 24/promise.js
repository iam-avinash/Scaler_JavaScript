const a = 121230;
const b = 121230;

let myPromise = new Promise(function (resolve, reject) {
  //   //   reject();
  //   resolve();

  if (a == b) {
    resolve("Yes, They are equal");
  } else {
    reject("No , they are not equal.");
  }
});

// console.log(myPromise);

myPromise.then(function (data) {
  console.log(data);
});

myPromise.catch(function (error) {
  console.log(error);
});

