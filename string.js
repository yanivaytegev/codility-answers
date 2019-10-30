
function solution(str) {

    let firstChar = true
    let count1 = 0;
    let count2 = 0;
    let count3 = 1;

    if (str.charCodeAt(0) < 123 && str.charCodeAt(0) > 97) {

        firstChar = false
    }

    for (let i = 1; i < str.length; i++) {

        if (firstChar) {

            if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) {
                count1++;
            }
            else {
                count2++
            }
        }
        else {

            if (str.charCodeAt(i) < 123 && str.charCodeAt(i) > 97) {
                count3++;
            }
        }
    }

    if (count1 === str.length - 1 || count2 === str.length - 1 || count3 === str.length - 1) {
        return true;
    }
    return false;
}









