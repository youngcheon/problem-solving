const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.map((e) => e.split(" ").map(Number));

function getMaxNumber(array) {
    let maxValue = 0;
    const dfs = (depth, index, result) => {
        if (depth === 3) {
            maxValue = Math.max(maxValue, result % 10);
            return;
        }
        for (let i = index; i < 5; i++) {
            dfs(depth + 1, i + 1, result + array[i]);
        }
    };
    dfs(0, 0, 0);
    return maxValue;
}

function solution(n, nums) {
    const answer = new Array(n);
    nums.forEach((arr, index) => {
        answer[index] = [index + 1, getMaxNumber(arr)];
    });
    answer.sort(([index1, value1], [index2, value2]) => {
        if (value1 > value2) return -1;
        if (value1 < value2) return 1;
        if (index1 > index2) return -1;
        if (index1 < index2) return 1;
    });
    return answer[0][0];
}

console.log(solution(N, numbers));
