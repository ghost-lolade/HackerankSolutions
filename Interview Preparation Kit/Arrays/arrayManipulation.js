function arrayManipulation(n, queries) {

    var arr = new Array(n).fill(0);
    for (var query of queries){
        arr[query[0] - 1] += query[2];
        arr[query[1]] -= query[2]
    }
    var max = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
        if (sum > max){
            max = sum;
        }
    }
    return max;
    

}