const graph = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" "));

function solution() {
    function DFS(depth, result, x, y) {
        const [dx, dy] = [
            [-1, 1, 0, 0],
            [0, 0, -1, 1],
        ];
        if (depth === 6) {
            answer.add(result);
            return;
        }
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [dx[i] + x, dy[i] + y];
            if (0 <= nx && nx < 5 && 0 <= ny && ny < 5) {
                DFS(depth + 1, result + graph[ny][nx], nx, ny);
            }
        }
        return;
    }
    const answer = new Set();
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            DFS(0, "", x, y);
        }
    }
    return answer.size;
}
console.log(solution());
