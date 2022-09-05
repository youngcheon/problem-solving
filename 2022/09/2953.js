const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const scores = input.map((e) =>
    e
        .split(" ")
        .map(Number)
        .reduce((a, b) => a + b)
);
const maxScore = Math.max(...scores);
console.log(scores.indexOf(maxScore) + 1, maxScore);
