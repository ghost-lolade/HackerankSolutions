function hourglassSum(arr) {
    // Write your code here
    
    
        let max_sum = -Infinity;
        for (let i = 0; i < 4; i++)
        {
            for (let j = 0; j < 4; j++)
            {
                // Considering mat[i][j] as top
                // left cell of hour glass.
                let sum = (arr[i][j] + arr[i][j + 1] +
                arr[i][j + 2]) + (arr[i + 1][j + 1]) +
                  (arr[i + 2][j] + arr[i + 2][j + 1] +
                                    arr[i + 2][j + 2]);
 
                // If previous sum is less then
                // current sum then update
                // new sum in max_sum
                max_sum = Math.max(max_sum, sum);
            }
        }


        // This other solution works too
    //     let count = -Infinity
    //        for( let i = 0 ; i < 4 ; i ++)
    //     {
    //     for( let j = 0 ; j < 4 ; j ++)
    //         {
    //         var t;
    //         t = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
    //         if( t > count )           
    //             {
    //             count = t ;
    //         }
    //     }
    // }
    // console.log(count);
    // return count
        return max_sum;
    
}