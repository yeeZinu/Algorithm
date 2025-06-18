function solution(s1, s2) {
    var answer = s2.filter((v) => s1.includes(v));
    return answer.length;
}