
function solution(S) {

    let i = 0
    let str = "";
    let result = -1;
    S += " ";

    while (S.length > i) {


        if (S[i] !== " ") {

            str += S[i];
        }
        else {
            let count = 0;
            let even = 0
            let notEven = 0

            for (let j = 0; j < str.length; j++) {

                if (str.charCodeAt(j) < 91 && str.charCodeAt(j) > 64 ||
                    str.charCodeAt(j) > 96 && str.charCodeAt(j) < 123) {
                    even++;
                }
                else if (str.charCodeAt(j) < 58 && str.charCodeAt(j) > 47) {
                    notEven++;
                }
                else {
                    count++;
                }
            }

            if (count > 0) {
                str = "";
            }
            else if (notEven % 2 !== 0 && even % 2 === 0) {
                if (str.length > result) {
                    result = str.length;
                }
            }
            str = "";
        }
        i++;
    }
    return result;
}
