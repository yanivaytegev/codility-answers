

function solution(S) {

    let arr = [];
    let i = 0;

    if (S[0] === "]" ||
        S[0] === "}" ||
        S[0] === ")") {

        return 0
    }

    while (i < S.length) {

        arr.push(S[i]);


        if (arr[arr.length - 2] === "{" && S[i] === "}" ||
            arr[arr.length - 2] === "(" && S[i] === ")" ||
            arr[arr.length - 2] === "[" && S[i] === "]") {

            arr.pop();
            arr.pop();
        }

        i++;
    }

    if (arr.length === 0) {
        return 1;
    }
    return 0
}

let A = "{[()()]}"
//let A = "([)()]"
//let A = ")("
//let A = "[()}";


console.log(solution(A));
