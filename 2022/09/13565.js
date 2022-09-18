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

    enqueue(value) {
        this.length++;
        if (this.length === 1) {
            this.head = this.tail = new Node(value);
            return;
        }

        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue() {
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
const [SIZE, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [M, N] = SIZE.split(" ").map(Number);
const graph = input.map((e) => [...e].map(Number));
const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
];
function BFS(x, y) {
    const q = new Queue();
    q.enqueue([x, y]);
    while (q.length) {
        const [x, y] = q.dequeue();
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [dx[i] + x, dy[i] + y];
            if (ny >= M) return 1;
            if (nx >= 0 && nx < N && ny >= 0 && !graph[ny][nx]) {
                graph[ny][nx] = 1;
                q.enqueue([nx, ny]);
            }
        }
    }
    return 0;
}

function solution() {
    for (let i = 0; i < N; i++) {
        if (!graph[0][i] && BFS(i, 0)) return "YES";
    }
    return "NO";
}
console.log(solution());
