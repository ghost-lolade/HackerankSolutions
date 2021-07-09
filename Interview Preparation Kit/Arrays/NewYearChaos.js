function minimumBribes(q) {
    // Write your code here
    
    let bribes = 0, i, j;
    for (i = 0; i < q.length; i++) {
        const pos = q[i], at = i + 1;
        if (pos - at > 2) { console.log("Too chaotic")
        return;
         } 
        for (j = Math.max(0, pos - 2); j < i; j++) {
            if (q[j] > pos) { bribes++ }
        }
    } 
    console.log(bribes);

}