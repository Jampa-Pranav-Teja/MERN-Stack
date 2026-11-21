// (...) -> the Spread Operator: unlocks a cleaner way to work with arrays, objects and function arguments in javaScript
// It has two modes Spread and Rest

const fruits = ["Apple", "Banana"];
const veggies = ["Carrot", "Broccoli"];

const fruitsCopy = [...fruits];
const veggiesCopy = [...veggies];

const groceries = [...fruits, ...veggies, "Bread"];

console.log(groceries);

// Spreading Object -> Really really important in react
// In react you should never directly modify the state of an object, instead we spread the object onto a new one.

const user = {
  name: "Pranav",
  age: 19,
  city: "Hyderabad"
}

const updatedUser = {
  ...user,
  age: 20, // as this age comes after the original one it will replace the new age.
  inOnline: true
};

console.log(user);
console.log(updatedUser);

// The Rest operator (...) -> It is used inside function parameters when you dont know how many arguments someone will pass in.
// Key rule: The rest parameter must always be the last parameter in the function.

function startParty(host, ...guests) {
  console.log(host);
  console.log(guests);
}

startParty("Pranav", "Harini", "Sai", "Rohith");
// host: Pranav
// Guests: ["Harini", "Sai", "Rohith"]
