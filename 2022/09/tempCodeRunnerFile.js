const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((e) => [...e].map(Number));
let maxValue = 0;
let check = Math.min(N, M);

for (let y = 0; y < N; y++) {
    if(N-y <= maxValue) break;
    for (let x = 0; x < M; x++) {
        if(M-x <= maxValue) break;
        for (let i = 0; i <= check; i++) {
            if (y + i >= N || x + i >= M) break;
            if(new Set(board[y][x],board[y+i][x+i],board[y][x+i],board[y+i][x]).size === 1){
                maxValue = Math.max(maxValue, i);
            }
            // if (board[y][x] === board[y][x + i] && board[y][x] === board[y + i][x] && board[y][x] === board[y + i][x + i]) {
            //     maxValue = Math.max(maxValue, i);
            // }
        }
    }
}
console.log((maxValue+1)**2);