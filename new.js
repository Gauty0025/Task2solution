// Task 2

// 1.

let luckyNumber = prompt("Please enter your lucky number:");
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 1; i <= luckyNumber; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j % 2 === 1) {
      row += j + " ";
    } else {
      row += alphabet[j / 2 - 1] + " ";
    }
  }
  console.log(row);
}

// 2.

let input = prompt("Please enter a number:");
let fibonacci = [0, 1];

while (
  fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <
  input
) {
  fibonacci.push(
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
  );
}
console.log(fibonacci.join(", "));
