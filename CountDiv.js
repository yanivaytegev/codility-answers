function solution(A, B, K) {

    let num = A % K === 0 ? 1 : 0;
    return parseInt(B / K) - parseInt(A / K) + num;
}

console.log(solution(6, 11, 2))
console.log(solution(0, 0, 11))
console.log(solution(1, 1, 11))
console.log(solution(0, 14, 2))
console.log(solution(0, 13, 2))
console.log(solution(10, 10, 5))
console.log(solution(10, 10, 5))
console.log(solution(11, 345, 17))


