const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let arr = new Array();
for (let i = 1; i <= 100; i++) {
    arr.push(i ** 2);
}
arr = arr.filter((e) => e >= input[0] && e <= input[1]);
console.log(arr.length > 0 ? arr.reduce((a, b) => a + b) + "\n" + Math.min(...arr) : -1);
