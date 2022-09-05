const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));
input.pop();
input.forEach((e) => console.log(e[0] > e[1] ? "Yes" : "No"));
