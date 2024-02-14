const name = ["Mark", "Steve", "John"];
const number = [1, 2, 3, 4, 5, 6];

Array.prototype.myForeach = function (callback) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

console.log(Array.prototype);

number.myForeach(function (ele) {
  console.log(ele + 2);
});

name.myForeach(function (nam) {
  console.log(nam);
});
