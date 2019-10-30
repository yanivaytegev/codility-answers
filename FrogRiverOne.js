
function solution(X, A) {

    let arr = [];
    let sum = 0;
    let l = (X * (X + 1)) / 2;
    let i = 0;

    while (i < A.length) {

        if (A[i] <= X) {
            if(arr[A[i]] === undefined) {
            arr[A[i]] = 1;
            sum += A[i];
            }
        }
        if (arr[A[i]] === 1) {
            if (sum === l) {
                return i;
            }
        }
        i++;      
    }
    return -1;
}