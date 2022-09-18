const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [first, ...others] = input[1].split(" ").map(Number);

function getGCD(a, b) {
    if (a % b === 0) return b;
    return getGCD(b, a % b);
}

const answer = new Array();
others.forEach((e) => {
    const GCD = getGCD(first, e);
    answer.push(`${first / GCD}/${e / GCD}`);
});
console.log(answer.join("\n"));
