function Rabbit(name) {
  this.name = name;
}

// Properti dan metode yang ingin kita bagikan di antara semua objek Rabbit
Rabbit.prototype.eats = true;
Rabbit.prototype.jumps = function() {
  console.log(`${this.name} jumps!`);
};

let fluffy = new Rabbit("Fluffy");
let bunny = new Rabbit("Bunny");

console.log(fluffy.name);  // Fluffy (properti sendiri)
console.log(fluffy.eats);  // true (diambil dari Rabbit.prototype)
fluffy.jumps();          // Fluffy jumps! (diambil dari Rabbit.prototype)

console.log(bunny.name);   // Bunny (properti sendiri)
console.log(bunny.eats);   // true (diambil dari Rabbit.prototype)
bunny.jumps();           // Bunny jumps! (diambil dari Rabbit.prototype)