function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inventory checked.");
      resolve();
    }, 2000);
  });

  return promise;
}

function createOrder() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order created.");
      resolve();
    }, 1000);
  });

  return promise;
}

function chargePayment() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment charged.");
      resolve();
    }, 1500);
  });
  return promise;
}

function sendInvoice() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Invoice sent.");
      resolve();
    }, 1000);
  });
  return promise;
}

async function main() {
  // callback hell
  // checkInventory(() => {
  //     console.log("Proceeding with order processing...");
  //     createOrder(() => {
  //         console.log("Order processing completed.");
  //         chargePayment(() => {
  //             console.log("Payment processing completed.");
  //             sendInvoice(() => {
  //                 console.log("All tasks completed.");
  //             });
  //         });
  //     });
  // });

  // Prmoises
  //   checkInventory()
  //     .then(createOrder)
  //     .then(chargePayment)
  //     .then(sendInvoice)
  
  // async await
  // await checkInventory();
  // console.log("Proceeding with order processing...");
  // await createOrder();
  // console.log("Order processing completed.");
  // await chargePayment();
  // console.log("Payment processing completed.");
  // await sendInvoice();
  // console.log("All tasks completed.");
}

main();
