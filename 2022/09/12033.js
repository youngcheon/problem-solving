const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number))
    .filter((e) => e.length > 1);

/* a가 b의 할인가격이면 true 리턴하는 함수*/
const isValid = (a, b) => b * 0.75 === a;

let answer = new Array();
input.forEach((testcase) => {
    const visited = new Array(testcase.length).fill(0);
    const temp = new Array();
    testcase.forEach((a, i) => {
        if (!visited[i]) {
            for (let j = i + 1; j < testcase.length; j++) {
                if (isValid(a, testcase[j]) && !visited[j]) {
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
answer.forEach((e, index) => console.log(`Case #${index + 1}:`, e.join(" ")));
