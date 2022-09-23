const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const visited = new Array(N + 1).fill(0);

function solution(n, k) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (!visited[i]) {
            for (let j = i; j <= n; j += i) {
                if (!visited[j]) {
                    visited[j] = 1;
                    count++;
                    if (count === k) {
                        return j;
                    }
                }
            }
        }
    }
}

console.log(solution(N, K));
