function solution(n) {
    var answer = new Set();
    let div = 2;
    while (n >= 2) {
        if(n % div === 0) {
            answer.add(div);
            n = n / div
        }
        else div++;
    }
    return [...answer];
}