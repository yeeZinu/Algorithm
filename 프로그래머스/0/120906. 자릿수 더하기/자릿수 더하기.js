function solution(n) {
    return [...''+n].reduce((a,b) => a + Number(b),0);
}