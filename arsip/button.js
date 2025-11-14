class Button {
  constructor(value, value2) {
    this.value = value;
    this.value2 = value2;
  }

  click() {
    console.log(this.value, this.value2);
  }
}

// new button untuk menggunakan class Button
let button = new Button("Hello", "World");

button.click(); // Output: Hello World

// Jika tidak menggunakan bind, this akan salah
document.getElementById('myButton').onclick = button.click; // Jika ada elemen dengan id 'myButton' di HTML, ini akan mencetak undefined

// Dengan bind, this akan benar
document.getElementById('myButton').onclick = button.click.bind(button); // Ini akan mencetak "Hello"