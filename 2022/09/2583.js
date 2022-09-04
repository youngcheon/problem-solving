const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, K] = input.shift().trim().split(" ").map(Number);
const area = input.map((e) => e.trim().split(" ").map(Number));
const graph = Array.from(Array(N), () => Array(M).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

/* 그래프 그리기 */
for (const [sx, sy, ex, ey] of area) {
  for (let i = N - ey; i <= N - sy - 1; i++) {
    for (let j = sx; j <= ex - 1; j++) {
      graph[i][j] = 1;
    }
  }
}

let q = new Array();
const BFS = (y, x) => {
  q.push([y, x]);
  let ret = 0;
  graph[y][x] = 1;
  while (q.length) {
    const [y, x] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (0 <= nx && nx < M && 0 <= ny && ny < N && !graph[ny][nx]) {
        graph[ny][nx] = 1;
        q.push([ny, nx]);
      }
    }
    ret++;
  }
  return ret;
};

let answer = [];
for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[0].length; j++) {
    if (!graph[i][j]) {
      answer.push(BFS(i, j));
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(" "));
