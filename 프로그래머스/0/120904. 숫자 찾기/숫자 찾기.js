function solution(num, k) {
    var answer = [...''+num].indexOf(''+k);
    if(answer > -1) {
        return answer += 1;
    }
    else return answer;
}