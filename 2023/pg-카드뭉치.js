function solution(a, b, goal) {
    for (const target of goal) {
        if (target === a[0]) {
            a.shift();
        } else if (target === b[0]) {
            b.shift();
        } else {
            return "No";
        }
    }
    return "Yes";
}
