
function solution(A = []) {

    A.sort((a, b) => { return a - b });


    let result = A[0] * A[1] * A[A.length - 1]
        > A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
        ? A[0] * A[1] * A[A.length - 1]
        : A[A.length - 1] * A[A.length - 2] * A[A.length - 3]


    return result;
}


let arr = [-3, 1, 2, -4, -6, 10, -120, -2, 5, 6, 5, 2, 96, 96, 5, -1000, -2]
//let arr = [4, 5, 1, 0]
console.log(solution(arr))