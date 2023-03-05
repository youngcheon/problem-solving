function solution(chicken) {
    let answer = 0;
    while (chicken >= 10) {
        let t = chicken % 10;
        chicken = parseInt(chicken / 10);
        answer += chicken;
        chicken += t;
    }
    return answer;
}
