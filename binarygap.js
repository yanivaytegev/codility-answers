
function solution(N) {

    let sum = 0;
    let count = 0;

    while (N > 0 && (N % 2) == 0) {
        N = N / 2
    }

    while (N > 0) {

        if ((N % 2) == 0) {
            count++;

        }
        else {
            if (count != 0) {
                if (sum < count) {

                    sum = count;
                    count = 0;
                }
            }
        }

        N = parseInt(N / 2)
    }
    return sum
}

