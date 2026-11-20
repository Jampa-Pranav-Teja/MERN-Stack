// This is a normal Function
function add(a, b) {
  return a + b;
}
console.log(add(1, 5));


// Arrow Function
// They let you write functions quickly
// They handle the "this" special keyword differently than normal functions
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 5));

// we just replaced function add() with const add = () =>
// When the function has only 1 parameter then you can remove the ()
function greet(name) {
  return "Hello " + name;
}

const greet = name => {
  return "Hello " + name;
};

// If there are no parameters then put ()
const sayHi = () => {
  return "Hi";
};

// If the only thing the function does is return then you can remove the {} and the return statement
const multiply = (a, b) => a * b;

// They are useful when used as "CallBack Functions" & cannot be used for "Constructor Functions"
