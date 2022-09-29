const [A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function gcd(x, y) {
    if (x % y === 0) return y;
    return gcd(y, x % y);
}
function solution(a, b) {
    return (a * b) / gcd(a, b);
}
console.log(solution(A, B));
