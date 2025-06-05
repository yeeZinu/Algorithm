function solution(age) {
    const alpa = {
        '0':'a',
        '1':'b',
        '2':'c',
        '3':'d',
        '4':'e',
        '5':'f',
        '6':'g',
        '7':'h',
        '8':'i',
        '9':'j'
    };
    let splitAge = String(age).split('');
    let answer = '';
    for(let i of splitAge){
        answer += alpa[i];
    }
    return answer;
}