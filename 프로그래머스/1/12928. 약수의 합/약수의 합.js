function solution(n) {
    let yaksu = getYaksu(n)
    let result = yaksu.reduce((a,b) => a+b , 0);
    return result;
}

function getYaksu(n){
    let list = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0){
            list.push(i);
        }
    }
    return list;
}