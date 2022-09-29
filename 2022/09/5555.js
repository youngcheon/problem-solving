const fs = require("fs");
const [target, testcase, ...rings] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = 0;
rings.forEach((ring) => {
    let temp = ring + ring;
    if (temp.indexOf(target) !== -1) answer++;
});
console.log(answer);
