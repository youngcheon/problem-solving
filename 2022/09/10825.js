const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = new Array();
input
    .map((e) => e.split(" "))
    .forEach((e) =>
        answer.push({
            name: e[0],
            korean: Number(e[1]),
            english: Number(e[2]),
            math: Number(e[3]),
        })
    );
answer = answer.sort((a, b) => {
    if (a.korean > b.korean) return -1;
    if (a.korean < b.korean) return 1;
    if (a.english > b.english) return 1;
    if (a.english < b.english) return -1;
    if (a.math < b.math) return 1;
    if (a.math > b.math) return -1;
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
});
answer = answer.map((e) => e.name);
console.log(answer.join("\n"));
