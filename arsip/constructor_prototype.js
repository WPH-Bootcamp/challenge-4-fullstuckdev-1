function Animal(name) {
  this.name = name;
}

function Fruit(name, color, rating) {
  this.name = name;
  this.color = color;
  this.rating = rating;
}

Fruit.prototype.isSweet = function () {
  if (this.rating > 7) {
    return `${this.name} is sweet`;
  } else {
    return `${this.name} is not sweet`;
  }
};

Animal.prototype.eats = true;
Animal.prototype.walk = function () {
  console.log(`${this.name} walks`);
};

let dog = new Animal("Buddy");
let cat = new Animal("Whiskers");

let semangka = new Fruit("Semangka", "Hijau", 10);
let apel = new Fruit("Apel", "Merah", 2);

console.log(semangka.isSweet());
console.log(apel.isSweet());

// console.log(dog.eats);
// console.log(cat.eats);
