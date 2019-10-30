//way 1
function solution(A) {

    let min = A.length * 10000;
    let pos = 0
    let sum = 0
    let count = 0


    for (let i = 0; i < A.length - 1; i++) {

        if ((A[i] + A[i + 1]) / 2 < min) {

            min = (A[i] + A[i + 1]) / 2;
            pos = i;
        }

        if (A[i] < 0) {

            sum += A[i];
            count++;

            if (sum / count < min) {
                min = sum / count
                pos
            }
        }
        else {
            sum = 0;
            count = 0;
        }
    }
    return pos;
}



//way 2
function solution(A) {
    var start = 0;

    var currentSum = A[0] + A[1];
    var minAvgSlice = currentSum / 2;
    for (var i = 2; i < A.length; i++) {
        currentSum += A[i];
        var newAvg = currentSum / 3;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 2;
        }

        currentSum -= A[i - 2];
        newAvg = currentSum / 2;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 1;
        }
    }

    return start;
}