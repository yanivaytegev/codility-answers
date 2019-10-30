function solution(N) {


    let i = 1;
    let count = 0;

    while (i * i < N) {
        if (N % i == 0) {
            count += 2
        }
        i++;
    }

    if (i * i == N) {
        count++;
    }

    return count
}


console.log(solution(456987444))







// let i = 0;
// let count = 1;

// while (N !== i) {

//     if (N % i === 0) {
//         count++;
//     }
//     i++;
// }

// return count;