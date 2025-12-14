const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function plus(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function times(x, y) {
  return x * y;
}

function divideNums(x, y) {
  if (y === 0) {
    throw new Error("Zero is not allowed as divisor");
  }
  return x / y;
}

function getAverage(list) {
  let total = 0;
  let i = 0;

  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total / list.length;
}

input.question("Input number 1: ", (first) => {
  input.question("Input number 2: ", (second) => {
    try {
      const n1 = parseFloat(first);
      const n2 = parseFloat(second);

      if (isNaN(n1) || isNaN(n2)) {
        throw new Error("Invalid input, numbers only");
      }

      const values = [n1, n2];

      console.log("Result Addition:", plus(n1, n2));
      console.log("Result Subtraction:", minus(n1, n2));
      console.log("Result Multiplication:", times(n1, n2));
      console.log("Result Division:", divideNums(n1, n2));
      console.log("Result Average:", getAverage(values));

    } catch (err) {
      console.log("Error found:", err.message);
    } finally {
      input.close();
    }
  });
});
