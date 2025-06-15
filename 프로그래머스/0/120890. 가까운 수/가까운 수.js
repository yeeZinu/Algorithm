function solution(array, n) {
    let same = [];
    var index = 0;
    array.sort((a,b) => a - b);
    let min = Math.abs(n - array[0]);
    for(let i = 1; i < array.length; i++) {
        if(Math.abs(n - array[i]) < min){
            min = Math.abs(n - array[i]);
            index = i;
        }
    }
    return array[index];
}