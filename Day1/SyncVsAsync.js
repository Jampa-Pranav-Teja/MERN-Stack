// Synchronus -> one after another
// Asynchronus -> Do other tasks while one is running in background

console.log("1");
console.log("2");
console.log("3");
console.log("4");

// This will log out 1 2 3 4 one after the other

console.log("Starting the Download");
let data = downloadFromServer("Some-file.zip");
console.log("Download Complete");
console.log("Now, Processing data");

// The user wont be able to do anything while the file downloads so this is called blocking
// This freezes the page making it unresposive
// JavaScript fixes this using Asynchronus Functions

// The old way of doing this was to use CallBack Functions
console.log("Order Coffee");
setTimeout(() => {
  console.log("The coffee is ready");
}, 2000);
console.log("Scroll on phone while coffee is being made");

// This will OutPut
// Order Coffee
// Scroll on phone while coffee is being made
// The coffee is ready

// There is a better way to do this by using promises
// A promise is a object that represents a future result, It can have 3 states.
// Pending
// Fullfiled
// Rejected

// During this we will use the .then() for successes and .catch() for errors

function orderCoffee(isMachineWorking) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isMachineWorking) {
        resolve("Here is your late");
      }
      else {
        reject("Sorry, The machine is broken");
      }
    }, 2000);
  })
}

console.log("Placing Order...");

orderCoffee(true)
  .then((coffee) => {
    console.log("Success: ", coffee);
  })
  .catch((error) => {
    console.error("Error: ", error);
  })

console.log("Scrolling the phone while waiting for coffee");


// The even more mordern day way of doing is is Async and Await
// async: Put before a function to allow Await
// await: Pauses only that function untill Promise finishes and hands you the result
// try-catch: Handles errors cleanly

function orderCoffee(isMachineWorking) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isMachineWorking) {
        resolve("Here is your coffee");
      }
      else {
        reject("Sorry the machine seems to not be working");
      }
    }, 2000);
  });
}
async function getMyMorningCoffee() {
  console.log("placing order...");

  try {
    const coffee = await orderCoffee(true);
    console.log("Success: ", coffee);
  }
  catch {
    console.error("Error: ", error);
  }
}

getMyMorningCoffee();
console.log("Scrolling phone while coffee is being prepared");


// In real world we can use this while fetching from an api in the web
async function getUser() {
  try {
    console.log("Fetching user...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("Name: ", user.name);
    console.log("Email: ", user.email);
  }
  catch(error) {
    console.error("Error: ", error);
  }
}
