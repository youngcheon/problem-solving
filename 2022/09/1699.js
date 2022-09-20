const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

const DP = new Array(N + 1).fill(0).map((e, i) => i);
for (let i = 2; i <= N; i++) {
    for (let j = 2; j ** 2 <= i; j++) {
        DP[i] = Math.min(DP[i], DP[i - j ** 2] + 1);
    }
}

console.log(DP[N]);
