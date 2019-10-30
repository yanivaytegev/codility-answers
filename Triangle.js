function solution(A) {

    let arr = A.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {

        if (arr[i] + arr[i + 1] > arr[i + 2] &&
            arr[i + 1] + arr[i + 2] > arr[i] &&
            arr[i + 2] + arr[i] > arr[i + 1]) {
            return 1;
        }

    }
    return 0;

}

let A = [10, 2, 5, 1, 8, 20]
//let A = [10, 50, 5, 1]

console.log(solution(A))

