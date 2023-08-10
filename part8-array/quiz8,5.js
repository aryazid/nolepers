function hitungJumlahKata(kalimat) {
    return kalimat.split(" ").length;
    
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  console.log("")

function pasanganTerbesar(num) {
   let str = num.toString();
   let pasanganTerbesar1 = -1;
 
   for (let i = 0; i < str.length - 1; i++) {
     let pasangan1 = parseInt(str[i] + str[i + 1]);
     if (pasangan1 > pasanganTerbesar1) {
       pasanganTerbesar1 = pasangan1;
     }
   }
 
   return pasanganTerbesar1;
 }
 
 // TEST CASES
 console.log(pasanganTerbesar(641573)); // 73
 console.log(pasanganTerbesar(12783456)); // 83
 console.log(pasanganTerbesar(910233)); // 91
 console.log(pasanganTerbesar(71856421)); // 85
 console.log(pasanganTerbesar(79918293)); // 99
  