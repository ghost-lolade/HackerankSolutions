function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    for (let i = 0; i < c.length - 1; i++, jumps++) {
        if (i+2 < c.length && c[i + 2] == 0) {
            i++;
        }
    }
    return jumps

}
