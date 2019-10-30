
function solution(A = []) {

    A.sort((a, b) => { return a - b });


    let result = A[0] * A[1] * A[A.length - 1]
        > A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
        ? A[0] * A[1] * A[A.length - 1]
        : A[A.length - 1] * A[A.length - 2] * A[A.length - 3]


    return result;
}
