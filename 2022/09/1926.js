const [[N, M], ...graph] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        this.length++;
        if (this.length === 1) {
            this.head = this.tail = new Node(value);
            return;
        }

        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    shift() {
        this.length--;
        const value = this.head.value;

        if (this.length === 0) {
            this.head = this.tail = null;
            return value;
        }

        this.head = this.head.next;
        return value;
    }
}
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
function bfs(x, y) {
    const q = new Queue();
    q.push([x, y]);
    let count = 0;
    while (q.length) {
        const [x, y] = q.shift();
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [dx[i] + x, dy[i] + y];
            if (ny >= 0 && ny < N && nx < M && nx >= 0 && graph[ny][nx]) {
                graph[ny][nx] = 0;
                q.push([nx, ny]);
            }
        }
        count++;
    }
    return count;
}

let paintingCount = 0;
let paintingMaxSize = 0;
for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (graph[y][x]) {
            graph[y][x] = 0;
            paintingCount++;
            paintingMaxSize = Math.max(paintingMaxSize, bfs(x, y));
        }
    }
}
console.log(`${paintingCount}\n${paintingMaxSize}`);
