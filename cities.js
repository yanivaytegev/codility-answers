

let T = [9, 1, 4, 9, 0, 4, 8, 9, 0, 1]


function solution(T) {

    let i = 0;
    let j = 0;
    let distance = [];
    let count = 0
    let capital = [];

    while (i < T.length) {
        if (T[i] === i) {
            capital.push(i);
        }
        i++;
    }


    while (j < capital.length) {

        let index = 0
        while (index < T.length - 1) {

            if (T[index] === capital[j]) {
                count++
            }
            distance.push(count);
            index++
        }
        count = 0;
    }

    return distance
}


console.log(solution(T))