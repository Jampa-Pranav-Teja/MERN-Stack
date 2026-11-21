// Destructuring -> It is a shortcut to unpack values from objects or arrays directly into their own variables so you dont have to keep repeating user.name or so
// Objects match by property name and order doesnt matter
// Arrays match by position

const user = {
  name: "Pranav",
  age: 20,
  city: "Hyderabad"
}

// Basic Destructuring
const { city, name } = user;
console.log(name, city);

// We can also rename a variable if required
const { name: userName } = user;
console.log(userName);

// We can also set some Default values
const { age, country = "India" } = user;
console.log(age, country);


// ARRAY DESTRUCTURING:
// We use [] instead of {}
const scores = [2, 3, 4, 5, 6];

//Basic Destructuring
const [first, second] = scores;
console.log(first, second);

// We can skip elements using empty commas
const [, , third] = scores;
console.log(third);

// We can also combile with the rest operator (...)
const [topScore, ...remainingScores] = scores;
console.log(topScore);
console.log(remainingScores);


// Destructuring Nested Arrays of objects
const users = [
  { id: 1, name: "Jampa", role: "Developer" },
  { id: 2, name: "Eadunur", role: "Designer" }
];

// To grab name of the first user and the role of the second user
const [{ name }, { role }] = users;
console.log(name); // output: Jampa
console.log(role); // output: Designer
