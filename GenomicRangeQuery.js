

function solution(S, P, Q) {

    let arr = [];

    for (let i = 0; i < P.length; i++) {

        if (S.indexOf("A", P[i]) > -1 && S.indexOf("A", P[i]) <= Q[i]) {
            arr.push(1);
        }
        else if (S.indexOf("C", P[i]) > -1 && S.indexOf("C", P[i]) <= Q[i]) {
            arr.push(2);
        }
        else if (S.indexOf("G", P[i]) > -1 && S.indexOf("G", P[i]) <= Q[i]) {
            arr.push(3);
        }
        else {
            arr.push(4);
        }
    }

    return arr;
}

// let S = "CAGCCTA";
// let P = [2, 5, 0];
// let Q = [4, 5, 6];

let S = "TC";
let P = [0, 0, 1];
let Q = [0, 1, 1];
console.log(solution(S, P, Q))

//return 2,4,1