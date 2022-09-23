const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function isPrime(number) {
    if (number <= 2) return true;
    for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
        if (number % i == 0) return false;
    }
    return true;
}

function solution(n, k) {
    const array = new Set();
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            for (let j = i; j <= N; j += i) {
                array.add(j);
            }
        }
    }
    return [...array][k - 1];
}

console.log(solution(N, K));