let biodata = ["0001","Roman Alamsyah ","Bandar Lampung","21/05/1989","Membaca"];
biodata.splice(2,0 , "Provinsi")
biodata.splice(4,1 , "Pria" , "SMA Internasional Metro")
console.log(biodata.join(", "));