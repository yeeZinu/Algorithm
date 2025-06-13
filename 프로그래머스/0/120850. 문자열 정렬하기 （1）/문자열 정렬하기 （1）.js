function solution(my_string) {
    let filterStr = Array.from(my_string).filter(v => ['0','1','2','3','4','5','6','7','8','9'].includes(v));
    return filterStr.map(Number).sort();
}