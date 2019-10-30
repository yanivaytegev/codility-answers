
function solution(N, A) {

    let array = [];
    let sum = 0
    let count = 0
    let i = 0

    while (A.length > i) {

        if (A[i] <= N) {

            if (array[A[i] - 1] === undefined) {

                array[A[i] - 1] = 1;
            }
            else {
                array[A[i] - 1] += 1;
            }

        }

        if (array[A[i] - 1] > sum) {

            sum = array[A[i] - 1];
        }

        if (A[i] > N) {

            count += sum
            sum = 0
            array = []
        }

        i++
    }

    for (let i = 0; i < N; i++) {
        if (array[i] === undefined) {
            array[i] = count;
        }
        else {
            array[i] += count;
        }
    }

    return array
}