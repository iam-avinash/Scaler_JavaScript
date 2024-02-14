function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink == "coffee") {
      resolve("order for coffee is placed");
    } else {
      reject("Order not placed , we dont serve any other drink");
    }
  });
}

function processDrink(orderStatus) {
  return new Promise(function (resolve) {
    resolve(`${orderStatus} it is ready to be served`);
  });
}

function genrateBill(orderProcessed) {
  return new Promise(function (resolve) {
    resolve(`${orderProcessed} and bill is 100rs`);
  });
}

let placeOrderPromise = placeOrder("coffee");

placeOrderPromise
  .then(function (orderStatus) {
    console.log(orderStatus);
    return processDrink(orderStatus);
  })
  .then(function (orderProcessed) {
    console.log(orderProcessed);
    return genrateBill(orderProcessed);
  })
  .then(function (bill) {
    console.log(bill);
  });

placeOrderPromise.catch(function (error) {
  console.log(error);
});
