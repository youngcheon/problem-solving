const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const graph = input.map((e) => e.split(" ").map(Number));
const [dx, dy] = [
    [-1, 1, 0, 0, 1, -1, -1, 1],
    [0, 0, -1, 1, 1, -1, 1, -1],
];

function solution() {
    const q = new Array();
    for (let y = 0; y < n; y++) for (let x = 0; x < m; x++) if (graph[y][x]) q.push([x, y]);
    while (q.length) {
        const [x, y] = q.shift();
        for (let i = 0; i < 8; i++) {
            const [nx, ny] = [dx[i] + x, dy[i] + y];
            if (0 <= nx && nx < n && 0 <= ny && ny < m && !graph[ny][nx]) {
                graph[ny][nx] = graph[y][x] + 1;
                q.push([nx, ny]);
            }
        }
    }
    let answer = 0;
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            answer = Math.max(answer, graph[y][x]);
        }
    }
    return answer - 1;
}

console.log(solution());
