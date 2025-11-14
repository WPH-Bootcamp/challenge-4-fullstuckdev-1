let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

// setiap rabbit punya karakteristik nya masing masing...

let rabbit = {
  jumps: true,
  __proto__: animal, // Cara lama, tapi ilustratif untuk demonstrasi rantai
};

let longEarRabbit = {
  earLength: 10,
  __proto__: rabbit,
};

let rabbitColorRed = {
    color: "red",
    __proto__: rabbit,
}

console.log(rabbitColorRed.__proto__)
console.log(rabbit.__proto__)