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

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().trim().split(" ").map(Number);
const FIRE = Array.from(Array(N), () => Array(M).fill(Infinity));
const JIHOON = Array.from(Array(N), () => Array(M).fill(0));
const GRAPH = input.map((v) => v.trim().split(""));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer;
let jx;
let jy;
let q = new Queue();

const isPossible = (y, x) =>
  0 <= x && 0 <= y && y < N && x < M && GRAPH[y][x] !== "#";

GRAPH.forEach((arr, i) => {
  arr.forEach((e, j) => {
    if (e === "F") {
      FIRE[i][j] = 1;
      q.enqueue([i, j]);
    } else if (e === "J") {
      jy = i;
      jx = j;
    }
  });
});

while (q.length) {
  const [y, x] = q.dequeue();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (isPossible(ny, nx) && FIRE[ny][nx] === Infinity) {
      FIRE[ny][nx] = FIRE[y][x] + 1;
      q.enqueue([ny, nx]);
    }
  }
}

JIHOON[jy][jx] = 1;
q.enqueue([jy, jx]);
while (q.length) {
  const [y, x] = q.dequeue();
  if (x === 0 || y === 0 || y === N - 1 || x === M - 1) {
    answer = JIHOON[y][x];
    break;
  }
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      isPossible(ny, nx) &&
      !JIHOON[ny][nx] &&
      FIRE[ny][nx] > JIHOON[y][x] + 1
    ) {
      JIHOON[ny][nx] = JIHOON[y][x] + 1;
      q.enqueue([ny, nx]);
    }
  }
}
console.log(answer ? answer : "IMPOSSIBLE");
