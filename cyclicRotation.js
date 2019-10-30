
function solution(A, K) {
    var rotatedArray = A;

    while (K > 0) {

        var currentArray;

        currentArray = rotatedArray.slice();

        for (var i = 0; i < currentArray.length; i++) {
            rotatedArray[(i + 1) % currentArray.length] = currentArray[i];
        }
        K--;
    }

    return rotatedArray;
}
