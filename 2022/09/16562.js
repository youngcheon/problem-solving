const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, K] = input.shift().split(" ").map(Number);
const cost = [0, ...input.shift().split(" ").map(Number)];
const info = input.map((e) => e.split(" ").map(Number));
const parents = new Array(N + 1).fill(0).map((e, i) => i);

function find(x) {
    if (x === parents[x]) return x;
    parents[x] = find(parents[x]);
    return parents[x];
}
function union(x, y) {
    x = find(x);
    y = find(y);
    if (x === y) return;
    if (cost[x] >= cost[y]) {
        parents[x] = y;
    } else {
        parents[y] = x;
    }
}

info.forEach(([a, b]) => union(a, b));
const answer = parents
    .filter((e, i) => e === i)
    .map((e) => cost[e])
    .reduce((a, b) => a + b);
console.log(answer > K ? "Oh no" : answer);
