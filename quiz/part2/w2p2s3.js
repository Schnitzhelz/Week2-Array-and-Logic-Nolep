function hitungJumlahKata(kalimat) {
    let jumlahkata = kalimat.split(" ").length;
    return jumlahkata
  }
  
  
  console.log(hitungJumlahKata('I have a dream')); 
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); 
  console.log(hitungJumlahKata('A song to sing')); 
  console.log(hitungJumlahKata('I')); 
  console.log(hitungJumlahKata('I believe I can code')); 
  