function solution(str1, str2) {
    return [...str1].map((x, index) => x + str2[index]).join('');
}

/*
str1이라는 문자열이 존재
str1의 홀수인덱스에 str2의 요소가 1개씩 들어가야함.

str1.spice()를 사용하면 될듯함.
str1의 1번인덱스에 str2의 0번인덱스 요소
str1의 3번인덱스에 str2의 1번인덱스 요소

i = 0~str2.length까지 반복

str1.spice(1, 0, str2[i])

map()까지?
[...str1].map((x) => console.log(x));
``
*/