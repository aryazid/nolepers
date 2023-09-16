/* Soal 1
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
  let huge = 9999
  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      const factor1 = i;
      const factor2 = angka / i;
      const digitCount = String(factor1).length + String(factor2).length;
      
      if (digitCount < huge) {
        huge = digitCount;
      }
    }
  }
  
  return huge;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  console.log("==================");


/* Soal 2
DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting*/
function urutkanAbjad(str) {
  const arr = str.split(''); // Cv string to array.

  // Boba sort.
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Ganti elemen.
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.join(''); // Convert the sorted array back to a string.
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  console.log("===================")

// Soal 3 
//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let arrsent = kalimat.split('');
  let nampung = []
  for (let i = 0 ; i < arrsent.length; i++ ){
    if (arrsent[i] == arrsent[i].toUpperCase()){
      let arrlow = arrsent[i].toLowerCase();
      nampung.push(arrlow) 
    } else if (arrsent[i] == arrsent[i].toLowerCase()){
      let arrup = arrsent[i].toUpperCase();
      nampung.push(arrup)
      } 
    }
    return nampung.join('')
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
  console.log("==================")

 
/* Soal 4
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(str) {
  let arrstr = str.split('');
  let indexA = -1;
  let indexB = -1;
  for (let i = 0; i < arrstr.length; i++) {
    if (arrstr[i] === 'a') {
      indexA = i;
    } else if (arrstr[i] === 'b') {
      indexB = i;
    }
    
    if (indexA !== -1 && indexB !== -1 && Math.abs(indexA - indexB) <= 4 && Math.abs(indexA - indexB) >2) {
      // If 'a' and 'b' are found within a distance of 4 characters or less,
      // return true as they are adjacent or separated by up to 3 characters.
      return true;
    }
  }
  
  return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  console.log("===================")