let [N, A, B] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));

function solution(a, b) {
    b = new Set(b);
    const answer = a.filter((e) => !b.has(e)).sort((x, y) => x - y);
    return answer.length ? `${answer.length}\n${answer.join(" ")}` : 0;
}

console.log(solution(A, B));
