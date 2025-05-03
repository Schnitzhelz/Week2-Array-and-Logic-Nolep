function pasanganTerbesar(num) {
    let str = String(num)
    let max = 0;
    for(let i = 0; i < str.length - 1; i++){
        let pasangan = Number(str[i] + str[i + i]);
        if (pasangan > max){
            max = pasangan;
        }
    }
    return max;
  }
  
console.log(pasanganTerbesar(641573)); 
console.log(pasanganTerbesar(12783456));
console.log(pasanganTerbesar(910233)); 
console.log(pasanganTerbesar(71856421)); 
console.log(pasanganTerbesar(79918293)); 