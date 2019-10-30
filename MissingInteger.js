
function solution(A) {

    let array = [0]
    let sum = 0
    let i = 0


    while (i < A.length) {

        if (A[i] > 0) {

            if (array[A[i]] === undefined) {
                sum += A[i]
                array[A[i]] = 1
            }
            else {
                array[A[i]] += 1
            }

        }
        i++;
    }

    let k = ((array.length - 1) * array.length) / 2

    if (array.length === 1) {
        return 1
    }
    else if (k === sum) {
        return array.length
    }
    else {
        return array.findIndex(x => x === undefined)
    }
}