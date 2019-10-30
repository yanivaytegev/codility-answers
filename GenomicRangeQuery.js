

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
