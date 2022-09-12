const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [W, H] = input[0].split(" ").map(Number);
let [P, Q] = input[1].split(" ").map(Number);
const T = parseInt(input[2]);
P += T;
Q += T;
let lastP = parseInt(P / W) % 2 ? W - (P % W) : P % W;
let lastQ = parseInt(Q / H) % 2 ? H - (Q % H) : Q % H;
console.log(lastP, lastQ);
