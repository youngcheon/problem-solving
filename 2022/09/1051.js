const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1, input.length).map((e) => [...e].map(Number));

let maxValue = 0;
for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        for (let i = 0; i <= 50; i++) {
            if (y + i >= N || x + i >= M) break;
            if (board[y][x] === board[y][x + i] && board[y][x] === board[y + i][x] && board[y][x] === board[y + i][x + i]) {
                maxValue = Math.max(maxValue, i);
            }
        }
    }
}
console.log((maxValue + 1) ** 2);
