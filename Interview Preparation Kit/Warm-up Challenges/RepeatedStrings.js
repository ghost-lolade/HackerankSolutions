// This function checks if the array

// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example


// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

// Constraints

// For  of the test cases, .
  
  // Complete the repeatedString function below.
  function repeatedString(s, n) {
  
    const l = s.length,
          repeatsRequired = Math.ceil(n / l),
          charsRequired = repeatsRequired * l,
          numCharsInLastRepeat = l - (charsRequired % n);
  
    const a_s = [...s].filter(c => c === 'a').length,
          a_r = [...s].slice(0, numCharsInLastRepeat).filter(c => c === 'a').length;
  
    return a_s * (repeatsRequired - 1) + a_r;
    
  }

console.log(repeatedString('aba', 10)); // 7
console.log(repeatedString('a', 1000000000000)); // 1000000000000