function solution(array, n) {
    var answer = array.filter(v => v === n);
    return answer.length;
}