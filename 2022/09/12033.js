const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));
const isValid = (a, b) => b * 0.75 === a;
let answer = new Array();
input.forEach((testcase) => {
    if (testcase.length === 1) return;
    const visited = new Array(testcase.length).fill(0);
    const temp = new Array();
    testcase.forEach((a, i) => {
        if (visited[i] === 0) {
            for (let j = i + 1; j < testcase.length; j++) {
                if (isValid(a, testcase[j]) && visited[j] === 0) {
                    visited[i] = 1;
                    visited[j] = 2;
                    break;
                }
            }
        }
    });
    visited.forEach((e, i) => {
        if (e === 1) temp.push(testcase[i]);
    });
    answer.push(temp);
});
answer.forEach((e, index) => {
    console.log(`Case #${index + 1}:`, e.join(" "));
});
