'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

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

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
