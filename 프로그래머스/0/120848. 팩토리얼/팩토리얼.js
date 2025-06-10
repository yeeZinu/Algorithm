function solution(n) {
    const facArr = [];
    for(let i = 1; i <= 10; i ++) {
        facArr.push(factorial(i));
    }
    
    var answer = facArr.filter(i => i <= n);
    return answer.length;
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}