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