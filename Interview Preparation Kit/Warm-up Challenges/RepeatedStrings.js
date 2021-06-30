// This function checks if the array

String.prototype.countCharacter = function(char) {
    return [...this].filter(c => c === char).length;
  }
  
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