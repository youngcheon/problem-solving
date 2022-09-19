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
const fs = require("fs");
const [size, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const graph = input.map((e) => [...e]);
const [R, C] = size.split(" ").map(Number);
const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
];

function bfs(x, y) {
    const q = new Queue();
    q.push([x, y]);
    let sheep = graph[y][x] === "k";
    let wolf = graph[y][x] === "v";
    graph[y][x] = "#";
    while (q.length) {
        const [x, y] = q.shift();
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [dx[i] + x, dy[i] + y];
            if (ny >= 0 && ny < R && nx >= 0 && nx < C && graph[ny][nx] !== "#") {
                sheep += graph[ny][nx] === "k";
                wolf += graph[ny][nx] === "v";
                graph[ny][nx] = "#";
                q.push([nx, ny]);
            }
        }
    }
    return sheep > wolf ? [sheep, 0] : [0, wolf];
}

const answer = [0, 0];
for (let y = 0; y < R; y++) {
    for (let x = 0; x < C; x++) {
        if (graph[y][x] !== "#") {
            const [sheep, wolf] = bfs(x, y);
            answer[0] += sheep;
            answer[1] += wolf;
        }
    }
}
console.log(answer.join(" "));
