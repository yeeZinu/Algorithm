function solution(cipher, code) {
    var answer = '';
    let cipArr = Array.from(cipher);
    for(let i = code - 1; i < cipArr.length; i+=code) {
        answer += cipArr[i];
    }
    return answer;
}