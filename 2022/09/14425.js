const fs = require("fs");
const [t, ...words] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = t.split(" ").map(Number);
const A = new Set(words.slice(0, N));
const B = words.slice(N);
const answer = B.filter((e) => A.has(e));
console.log(answer.length);
