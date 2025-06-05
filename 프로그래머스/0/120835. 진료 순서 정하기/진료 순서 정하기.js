function solution(emergency) {
    const copyEmergency = [...emergency].sort((a, b) => b - a);
    var answer = emergency.map((v) => copyEmergency.indexOf(v)+1);
    return answer;
}