console.log("Example 1: Function Declaration");

function addTwoV1(x, y) {
    return x + y;
}
console.log("5 + 4 is", addTwoV1(5, 4));
// 5 + 4 is 9

console.log("Example 2: Arrow Function");
const addTwoV2 = (x, y) => {
    return x + y;
}
console.log("5 + 4 is", addTwoV2(5, 4));
// 5 + 4 is 9

console.log("Example 3: Arrow Function (Implicit Return)");
const addTwoV3 = (x, y) => x + y;
console.log("5 + 4 is", addTwoV3(5, 4));
// 5 + 4 is 9

