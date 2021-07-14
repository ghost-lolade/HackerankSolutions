function minimumSwaps(arr) {
    let swap = 0,visited =[]
    for (let i = 0; i < arr.length; i++) {
        // console.log("i \t ->"+i)
        let j = i, cycle = 0;
        // console.log("j \t ->" + j)
        while (!visited[j]) {
            // console.log("in while loop")
            // console.log(visited[j])
            visited[j] = true;
            j = arr[j] - 1;
            // console.log("j \t ->" + j)
            cycle++;
        }
        if (cycle != 0)
            swap += cycle - 1;
        // console.log("swap \t ->" + swap)
    }
    return swap;

}