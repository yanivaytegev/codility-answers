
function solution(A = []) {

    let arr = [];
    let i = 0;
    let count = 0;

    while (i < A.length) {

        if (arr[A[i]] === undefined) {
            arr[A[i]] = 1;
        } else {
            arr[A[i]]++;
        }

        if (arr[A[i]] === 1) {
            count++;
        }

        i++;
    }

    return count;
}
