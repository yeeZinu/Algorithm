function solution(my_string) {
    var answer = '';
    [...my_string].map((v) => {
        if(v === v.toUpperCase()) {
            answer += v.toLowerCase()
        }
        else {
            answer += v.toUpperCase()
        }
    });
    return answer;
}