function angkaPalindrome(number) {
    for (let i = number + 1; ; i++) {  
      let str = String(i); 
      let reversed = str.split('').reverse().join(''); 
      if (str === reversed) {
        return i;
      }
    }
  }

console.log(angkaPalindrome(8)); 
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000)); 
console.log(angkaPalindrome(21));