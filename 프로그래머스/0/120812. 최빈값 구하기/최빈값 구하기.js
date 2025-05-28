function solution(arr) {
    
    if (arr.length === 1) {
        return arr[0];
    }
    
    // 최빈수를 저장할 객체
    const counter = {};
    // counter안에 해당 수가 있으면 +1 없으면 1로 초기화
    for(let i = 0; i< arr.length; i++){
        counter[arr[i]] ? counter[arr[i]] += 1 : counter[arr[i]] = 1;
    }
    
    // counter 내부의 최빈 값 구하기
    const max = Math.max(...Object.values(counter));
    
    // 최빈 값의 key값 찾기
    const highestKey = Object.keys(counter).filter(x => counter[x] === max);
    
    
    // 최빈값이 중복인지 확인
    if (highestKey.length > 1) {
        return -1;
    }
    else {
        return Number(highestKey);
    }
    
    return 4;
}