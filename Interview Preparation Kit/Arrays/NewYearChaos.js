// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

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