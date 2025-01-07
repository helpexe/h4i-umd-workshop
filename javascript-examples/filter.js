// Array of numbers
const nums = [1, 2, 3, 4, 5, 6]
console.log(`nums (ORIGINAL): ${nums}`);

// Filter to keep all numbers < 3
// (remove all numbers >= 3)
const newNums = nums.filter((num) => num < 3);
console.log(`newNums: ${newNums}`); // [1, 2]

const oddOnly = nums.filter((num) => (num % 2));
console.log(`oddOnly: ${oddOnly}`);