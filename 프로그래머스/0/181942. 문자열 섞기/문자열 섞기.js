function solution(str1, str2) {
    return [...str1].map((x, index) => x + str2[index]).join('');
}