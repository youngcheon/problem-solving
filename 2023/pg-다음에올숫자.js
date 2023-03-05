function solution(c) {
    if (c[2] - c[1] === c[1] - c[0]) {
        return c.at(-1) + c[1] - c[0];
    } else {
        return (c.at(-1) * c[1]) / c[0];
    }
}
