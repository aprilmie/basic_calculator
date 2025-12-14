const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Dili pwede division by zero!");
  }
  return a / b;
}

function average(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    try {
      let a = Number(num1);
      let b = Number(num2);

      if (isNaN(a) || isNaN(b)) {
        throw new Error("Dapat number ra imong i-input!");
      }

      console.log("Add:", add(a, b));
      console.log("Subtract:", subtract(a, b));
      console.log("Multiply:", multiply(a, b));
      console.log("Divide:", divide(a, b));
      console.log("Average:", average([a, b]));

    } catch (error) {
      console.log("Error:", error.message);
    } finally {
      rl.close();
    }
  });
});
