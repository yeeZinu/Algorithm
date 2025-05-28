function solution(n) {
    // 6^m / n = 0 일때 m = 피자판 수
    for(let i = 1; i <= n; i++){
        if((6*i) % n == 0) {
            return i;
        }
    }
}