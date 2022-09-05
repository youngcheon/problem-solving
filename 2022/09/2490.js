const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));

input.forEach((e) => console.log(["D", "C", "B", "A", "E"][e.reduce((a, b) => a + b)]));
