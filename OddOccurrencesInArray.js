//way 1
function solution(A) {
    let array = [];

    for (let i = 0; i < A.length; i++) {

        if (array[A[i]] === undefined) {
            array[A[i]] = 1;
        }
        else {
            array[A[i]] += 1;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            return i;
        }

    }
}

//way 2
function solution2(N) {

    var odd = 0

    for (var i = 0; i < N.length; i++) {
        odd ^= N[i];
    }

    return odd;
}
