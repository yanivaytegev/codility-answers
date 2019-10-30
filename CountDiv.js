function solution(A, B, K) {

    let num = A % K === 0 ? 1 : 0;
    return parseInt(B / K) - parseInt(A / K) + num;
}


