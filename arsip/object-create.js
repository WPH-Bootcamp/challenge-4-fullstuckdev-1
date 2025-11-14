let animalProto = {
  eats: true,
  drinks: true,
  sleeps: function () {
    console.log("Zzzzz");
  },
};

let cat = Object.create(animalProto);

console.log(cat) // {}

cat.name = "Whiskers";

console.log(cat.eats); // true
console.log(cat.drinks); // true
cat.sleeps(); // Zzzzz
console.log(cat.name); // Whiskers
console.log(Object.getPrototypeOf(cat) === animalProto); // true
