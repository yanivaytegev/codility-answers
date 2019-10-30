function solution(A) {

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

