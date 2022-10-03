const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number).slice(0, -1);
function getDivisor(n) {
    if (n === 1) return 1;
    let arr = new Array();
    for (let i = 1; i < n; i++) {
        if (n % i === 0) arr.push(i);
    }
    return arr.reduce((a, b) => a + b) === n ? arr : 0;
}
function solution(numbers) {
    const answer = new Array();
    numbers.forEach((e) => {
        const temp = getDivisor(e);
        const message = temp ? " = " + temp.join(" + ") : " is NOT perfect.";
        answer.push(e + message);
    });
    return answer.join("\n");
}
console.log(solution(input));
