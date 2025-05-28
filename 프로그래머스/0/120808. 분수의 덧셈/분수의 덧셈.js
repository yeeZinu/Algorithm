function findGCD (a, b) {
    let gcd = 1; 
    for (let i = 2; i <= Math.min(a, b); i++ ) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function solution(numer1, denom1, numer2, denom2) {
    
    let num3 = (numer1 * denom2) + (numer2 * denom1);
    let den3 = denom1 * denom2;
    
    let gcd = findGCD(num3, den3)
    
    
    return [num3 / gcd, den3 / gcd];
}