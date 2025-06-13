function solution(my_string) {
    let answer  = ''
    let str = my_string.split('');
    for(let i of str) {
        if(!answer.includes(i)){
            answer += i;
        }
    }
    return answer;
}