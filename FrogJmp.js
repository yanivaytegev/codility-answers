function solution(X, Y, D) {

    if (X === Y) {
        return 0
    }

    if (D >= (Y - X)) {
        return 1
    }

    if (((Y - X) / D) % 1 === 0) {

        return parseInt((Y - X) / D)

    }

    return parseInt((Y - X) / D) + 1
}