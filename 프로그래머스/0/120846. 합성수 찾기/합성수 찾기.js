function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
           answer += 1;
        }
        if(i == 2 || i == 3 || i == 5 || i == 7) {
            answer -= 1;
        }
    }
    return answer;
}