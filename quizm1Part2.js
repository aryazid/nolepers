// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let minit =  0;
    let detik = 0;
    if (menit>=60){
        minit = Math.floor(menit/60);
        detik = menit % 60;
    } else  {
        return "0:"+menit;
    }
    return `${minit}:${detik.toString().length == 2 ? detik : "0"+ detik}`;
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log('')
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.


function xo(str) {
    if (str.length % 2 == 0) {
      // jumlah genap, lanjut cek apakah x dan o jumlah nya sama
      let xo = 0;
      let ox = 0;
      for (let i = 0; i < str.length ; i++) {
        if (str[i] == "o") {
          xo++;
        } else if (str[i] == "x") {
          ox++;
        }
      }
      // proses cek terakhir
      if (xo == ox) return true;
      return false;
    } else {
      return false;
    }
  }
    // you can only write your code here!

  
  // TEST CASES
  console.log(xo('xoxo')); //true
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true