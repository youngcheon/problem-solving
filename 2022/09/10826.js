const N = Number(require("fs").readFileSync("/dev/stdin"));

function solution(number) {
    let x = 0n;
    let y = 1n;
    for (let i = 0; i < number; i++) {
        [x, y] = [y, x + y];
    }
    return String(x);
}

console.log(solution(N));
