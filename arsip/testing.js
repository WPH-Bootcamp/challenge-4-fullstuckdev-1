let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
  running() {
    console.log("Animal berlari...");
  },
  drinks: true
};

let rabbit = {
  jumps: true,
};

// Mengatur rabbit's [[Prototype]] menjadi animal
// Ini berarti rabbit akan mewarisi properti dan metode dari animal
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats);
rabbit.walk();
rabbit.running();
