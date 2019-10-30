

 let array = [4,1,2,3];


solution = (arr) =>{

    let sum = arr.length;
    let total = 0;

    for(let i = 0; i < arr.length ; i++) {   

        sum += i;
        total += arr[i];
    }

    if(sum === total){
        return 1;
    }
    else{
        return 0;
    }
}



function solution(A) {
    var L = A.length; // Length of the array
    var X = ((L + 1) * L) / 2; // Sum from 1..L
    var Y = 0; // Sum of evaluated values
    var I = 0; // Counter
    var F = []; // Found elements
    var V = -1; // Container
      
    while (I < L) { // Start searching the array
      V = A[I]; // Get the value
      I++; // Increase the counter
      if (F[V]) continue; // If we've accounted for this, continue
      F[V] = true; // Record the value
      Y += V; // Add to the evaluated sum
    }
      
    // If the evaluated sum is equal to the sum of the array length
    // then we can be sure that the array is a permutation.
    return X === Y ? 1 : 0;
  }