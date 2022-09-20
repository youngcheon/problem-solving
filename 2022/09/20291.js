const fs = require("fs");
const [N, ...files] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const map = new Map();
files.forEach((e) => {
    map.set(e.split(".")[1], map.get(e.split(".")[1]) + 1 || 1);
});
const answer = [...map]
    .sort(([name, value], [name2, value2]) => {
        if (name > name2) return 1;
        if (name < name2) return -1;
    })
    .map((e) => e.join(" "));
console.log(answer.join("\n"));
