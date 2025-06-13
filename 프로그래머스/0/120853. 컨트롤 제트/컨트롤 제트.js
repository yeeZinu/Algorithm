function solution(s) {
    let answer = [];
    var numlist = s.split(' ');
    for(let i of numlist){
        if(i === 'Z'){
            answer.pop();
        }
        else answer.push(i);
    }
    return answer.reduce((a,b) => a + Number(b), 0);
}