const trees = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const TOTAL_COUNT = trees.length;
const hashTable = new Map();
trees.forEach((e) => hashTable.set(e, hashTable.get(e) + 1 || 1));
const answer = [...hashTable].sort().map((e) => `${e[0]} ${((e[1] / TOTAL_COUNT) * 100).toFixed(4)}`);
console.log(answer.join("\n"));
