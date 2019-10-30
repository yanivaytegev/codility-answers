let array = [-1000,1000]
solution = (arr) => {
    let total = 0;
    let sum = arr.reduce((x, num) => x + num);
    let result = sum ;
    let i = 0;

    while ( i < arr.length) {

        total += arr[i];
        sum -= arr[i];

        if(result === 0){
            return 0;
        }

        if (total - sum > 0) {
            if(result > (total - sum) ){
                result = total - sum;
            } 
        }
        else{            
            if((total - sum )*(-1) ){
                result = (total - sum )*(-1);
            }
        }      
        i++
    }
    return result;
}


console.log(solution(array));


// 100% solution
function solution(A) {
    var retval;
    
    var sumRight = A.reduce(function(pv, cv, idx){ return (idx > 0)? pv + cv : 0; }, 0);
    var sumLeft = 0;
    var substractions = [];
    var maxI = A.length - 1;
    
    for(var i = 0; i < maxI; i++){
        sumLeft += A[i];
        substractions.push(Math.abs(sumLeft - sumRight));
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }
    
    return substractions.reduce(function(pv,cv,idx){ return (idx > 0)? ((pv < cv)? pv : cv) : cv; }, 0);
}