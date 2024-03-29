
//way 1
function solution(A) {
    let total = 0;
    let sum = A.reduce((x, num) => x + num);
    let result = sum;
    let i = 0;

    while (i < A.length) {

        total += A[i];
        sum -= A[i];

        if (result === 0) {
            return 0;
        }

        if (total - sum > 0) {
            if (result > (total - sum)) {
                result = total - sum;
            }
        }
        else {
            if ((total - sum) * (-1)) {
                result = (total - sum) * (-1);
            }
        }
        i++
    }
    return result;
}



//way 2 100% solution
function solution(A) {

    var sumRight = A.reduce(function (pv, cv, idx) { return (idx > 0) ? pv + cv : 0; }, 0);
    var sumLeft = 0;
    var substractions = [];
    var maxI = A.length - 1;

    for (var i = 0; i < maxI; i++) {
        sumLeft += A[i];
        substractions.push(Math.abs(sumLeft - sumRight));
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }

    return substractions.reduce(function (pv, cv, idx) { return (idx > 0) ? ((pv < cv) ? pv : cv) : cv; }, 0);
}