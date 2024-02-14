//You are given a transaction array, and use a filter to find the positive transaction amounts
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

function positive(amount) {
  return amount > 0;
}

let postiveValue = transactions.filter(positive);
console.log(postiveValue);
