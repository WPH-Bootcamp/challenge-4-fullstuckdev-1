function traditionalFunc() {
  console.log(arguments); // Objek arguments lengkap
}

const arrowFunc = () => {
  // console.log(arguments); // Error: arguments is not defined
};

traditionalFunc(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

// Cara benar untuk arrow function:
const arrowFuncWithRest = (...args) => {
  console.log(args); // Array argumen
};

arrowFuncWithRest(1, 2, 3); // Output: [ 1, 2, 3 ]

/////////////////////

// tidak bisa digunakan sebagai konstruktor (kalau misal arrow functions)
const MyObjectArrow = () => {
  this.value = 10;
};