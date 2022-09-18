const fs = require("fs");
const [n, ...students] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const K = n.split(" ").map(Number)[0];
const answer = [...new Set(students.reverse())].reverse().splice(0, K);
console.log(answer.join("\n"));
