function solution(balls, share) {
    if (balls === share) {
        return 1;
    }
    
    var answer = factorial(balls);
    let under = factorial(balls - share) * factorial(share);
    return Math.round(answer / under);
    
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}