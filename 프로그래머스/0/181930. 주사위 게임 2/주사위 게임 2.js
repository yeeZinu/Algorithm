function solution(a, b, c) {
    let same = 0;
    let answer = 1;
    // 중복 값 갯수 찾기
    for(let i of [a, b, c]){
        same = Math.max([a, b, c].filter(a => a === i).length, same)
    }
    // 중복 값의 갯 수 만큼 반복 
    for(let i = 1; i <= same; i++){
        answer *= (Math.pow(a,i) + Math.pow(b,i) + Math.pow(c,i));
    }
    return answer;
}