function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxOld = 0;
    let maxNew = 0;
    let min = A[0];
    let gap = 0;
    let result = 0;

    for (let i = 0; i < A.length; i++) {

        if (A[i] > maxNew) {

            maxNew = A[i];

            if (maxOld !== 0) {

                gap = maxOld < maxNew ? maxOld - min : maxNew - min;
            }

            result = result < gap ? gap : result;
            maxOld = maxOld > maxNew ? maxOld : maxNew;
            min = maxOld !== maxNew ? min : maxNew;
            maxNew = 0;
        }
        if (A[i] < min) {
            min = A[i];
        }
    }
    return result;
}




let arr = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]
//let arr = [3, 2, 6]
//let arr = [100000000, 1, 2, 2, 99999999]
//let arr = [1, 2, 3]
console.log(solution(arr));
