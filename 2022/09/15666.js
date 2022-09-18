let [[N, M], numbers] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));

const answer = new Array();
numbers = [...new Set(numbers)].sort((a, b) => a - b);
function dfs(depth, index, result) {
    if (depth === M) {
        answer.push(result.trim());
        return;
    }
    for (let i = index; i < numbers.length; i++) {
        dfs(depth + 1, i, result + " " + String(numbers[i]));
    }
}

dfs(0, 0, "");
console.log(answer.join("\n"));
