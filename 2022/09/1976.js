const fs = require("fs");
let [N, M, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
[N, M] = [N, M].map(Number);
const graph = input.map((e) => e.split(" ").map(Number));
const city = graph.pop();
const parent = new Array(N).fill(0).map((e, i) => i);

function find(node) {
    if (node !== parent[node]) {
        parent[node] = find(parent[node]);
    }
    return parent[node];
}
function union(x, y) {
    x = find(x);
    y = find(y);
    if (x === y) return;
    if (x < y) {
        parent[y] = x;
    } else {
        parent[x] = y;
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) union(i, j);
    }
}

let bool = "YES";
for (let i = 1; i < M; i++) {
    if (find(city[i - 1] - 1) !== find(city[i] - 1)) {
        bool = "NO";
        break;
    }
}
console.log(bool);
