function solution(n) {
    var answer = 0;
    let i = 0;
    while (i <= n) {
        answer += i
        i += 2;
        console.log(answer);
    }
    return answer;
}