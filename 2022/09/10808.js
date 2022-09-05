const fs = require("fs");
const input = [...fs.readFileSync("/dev/stdin").toString().trim()];
const table = new Map();
for (let i = 97; i <= 122; i++) {
  table.set(i, 0);
}
input.forEach((e) => table.set(e.charCodeAt(), table.get(e.charCodeAt()) + 1));
console.log([...table.values()].join(" "));
