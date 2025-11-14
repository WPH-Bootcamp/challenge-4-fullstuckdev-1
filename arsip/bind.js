let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}`);
  },
};

// user.sayHi(); // Output: Hello, John

// bind untuk bikin fungsi baru dengan this yang terikat ke objek user
let sayHiBound = user.sayHi.bind(user);

setTimeout(sayHiBound, 1000); // Output: Hello, John





// multiple
function multiply(a, b) {
  // null * 2 = NaN (not a number)
  return a * b;
}

// Buat fungsi baru yang mengalikan dengan 2
let multiplyByTwo = multiply.bind(null, 2); // null karena this tidak relevan di sini

console.log(multiplyByTwo(1000)); // Output: 2000 (2 * 1000)

console.log(multiplyByTwo(5)); // Output: 10 (2 * 5)
console.log(multiplyByTwo(10)); // Output: 20 (2 * 10)

function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// Buat fungsi "sayHelloTo" dengan greeting "Hello" sudah terikat
let sayHelloTo = greet.bind(null, "Hello");

sayHelloTo("Alice"); // Output: Hello, Alice!
sayHelloTo("Bob"); // Output: Hello, Bob!
sayHelloTo(); // Output: Hello, Bob!

