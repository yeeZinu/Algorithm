function solution(order) {
    return Array.from(order.toString()).filter(v => ['3', '6', '9'].includes(v)).length;;
}