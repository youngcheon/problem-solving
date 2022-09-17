const [[N, M], ...graph] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));

function bfs(x, y) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const q = new Array();
    q.push([x, y]);
    let count = 0;
    while (q.length) {
        const [x, y] = q.shift();
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [dx[i] + x, dy[i] + y];
            if (ny >= 0 && ny < N && nx < M && nx >= 0 && graph[ny][nx]) {
                graph[ny][nx] = 0;
                q.push([nx, ny]);
            }
        }
        count++;
    }
    return count;
}

let paintingCount = 0;
let paintingMaxSize = 0;
for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (graph[y][x]) {
            graph[y][x] = 0;
            paintingCount++;
            paintingMaxSize = Math.max(paintingMaxSize, bfs(x, y));
        }
    }
}
console.log(paintingCount);
console.log(paintingMaxSize);
