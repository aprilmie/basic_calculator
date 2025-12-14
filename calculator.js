const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
  average: (nums) => {
    let sum = 0;
    for (let n of nums) {
      sum += n;
    }
    return sum / nums.length;
  }
};


rl.question("First value: ", (val1) => {
  rl.question("Second value: ", (val2) => {
    try {
      let x = Number(val1);
      let y = Number(val2);

      if (!Number.isFinite(x) || !Number.isFinite(y)) {
        throw new Error("Input must be numeric");
      }

      console.log("\n--- CALCULATION RESULTS ---");
      console.log(`Addition: ${calculator.add(x, y)}`);
      console.log(`Subtraction: ${calculator.subtract(x, y)}`);
      console.log(`Multiplication: ${calculator.multiply(x, y)}`);
      console.log(`Division: ${calculator.divide(x, y)}`);
      console.log(`Average: ${calculator.average([x, y])}`);

    } catch (e) {
      console.log("Calculation Error:", e.message);
    } finally {
      rl.close();
    }
  });
});
