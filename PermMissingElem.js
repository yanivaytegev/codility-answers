 
function solution(A) {

    
    let sumIndex = 0;
    let sumValue = 0;
    
    for (let i = 0; i < A.length +2; i++) {

     sumIndex += i ;
     
     if( i < A.length ){
         
     sumValue += A[i];
     }
   }
   return (sumIndex - sumValue);
}