
function solution(A, K) {
    var rotatedArray = A;
    
    while (K > 0) {

        var currentArray;

        console.log(currentArray);

         currentArray = rotatedArray.slice();
        
        
        for (var i = 0; i < currentArray.length; i++) {
            rotatedArray[(i+1)%currentArray.length] = currentArray[i];   
        }
        K--;
    }
    
    return rotatedArray;
}

console.log(solution([3, 8, 9, 7, 6,10,12,60],3)) 