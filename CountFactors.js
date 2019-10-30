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



