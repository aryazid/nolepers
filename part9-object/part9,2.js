//Soal 3
function cariMedian(arr) {
  arr.sort(function(a,b){return a-b}); //sort dulu gk sih
    // you can only write your code here!
    if (arr.length % 2 == 0){
      let midg = Math.floor((arr.length - 1)/2);
      let midh = Math.floor(arr.length/2);
      let midge = (arr[midg] + arr[midh])/2;
      return midge;
    } else{
      let mid = Math.floor((arr.length - 1)/2);
      return arr[mid];
    }
  } 
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  console.log("=============")
// Soal 4
/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  let modus = -1; // Inisiasi modus -1.
  let mCount = 0; 
  
  for (let i = 0; i < arr.length; i++) {
    let count = 0; 

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > mCount && count > 1) {
      modus = arr[i];
      mCount = count;
    } else if (count > 3) {
      modus = (-1);
    }
  }

  return modus;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  console.log("==========")


//Soal 5
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  let nampung = ""
  for (let i = 0 ; i < kata.length; i++){
    let saat = String.fromCharCode(kata.charCodeAt(i)+1);
    nampung = nampung+saat;
  }
    // you can only write your code here!
    return nampung;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu