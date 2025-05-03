function palindrome(kata) {
    let palindrome=""
      for(i = kata.length -1; i >= 0; --i){
          palindrome += kata[i]
      }
         return palindrome === kata
  }
  

  console.log(palindrome('katak')); 
  console.log(palindrome('blanket')); 
  console.log(palindrome('civic'));
  console.log(palindrome('kasur rusak')); 
  console.log(palindrome('mister')); 