function solution(a, d, included) {
    let sum  = [a];
    var answer = 0;
    for(let i = 0; i < included.length-1; i++){
        sum.push(sum[i]+d);
    }
    for(let i = 0; i < included.length; i++) {
        if(included[i] === true){
            answer += sum[i];
        }
    }
    return answer;
}