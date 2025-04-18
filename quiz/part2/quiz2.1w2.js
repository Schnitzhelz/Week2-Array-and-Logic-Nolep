function palindrome(kata) {
  let palindrome=""
    for(i = kata.length -1; i >= 0; --i){
        palindrome += kata[i]
    }
       return palindrome === kata
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
//kenapa dioutputnya ada undefinied