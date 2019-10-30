
function solution(A) {

    let count = 0;
    let multiply = 0;

    for (let i = 0; i < A.length; i++) {

        if (A[i] == 0) {
            multiply += 1;
        }
        if (multiply > 0) {
            if (A[i] == 1) {
                count += multiply;
                if (count > 1000000000) {
                    return -1;
                }
            }
        }
    }
    return count;

}
