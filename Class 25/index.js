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
async function serveorder() {
  let orderStatus = await 
}
