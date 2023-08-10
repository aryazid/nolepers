/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    // you can only write your code here!
    let palindrome1 = ""; 
    for(let i = kata.length - 1; i >=0; i--){
        palindrome1 += kata[i];
    } if (palindrome1 == kata) 
    return true;
   else {
    return false
  }
      // you can only write your code here!
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log("Pencocokan Kata Palindrome done")
  console.log("")

  /*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function findHigherPalindrome(num) {
  let higher = num + 1;

  while (true) {
      if (isPalindrome(higher.toString())) {
          return higher;
      }
      higher++;
  }
}

function angkaPalindrome(num) {
  if (isPalindrome(num.toString())) {
      return num + 1;
  } else {
      return findHigherPalindrome(num);
  }
}

console.log(angkaPalindrome(8));    // Output: 9
console.log(angkaPalindrome(10));   // Output: 11
console.log(angkaPalindrome(117));  // Output: 121
console.log(angkaPalindrome(175));  // Output: 181
console.log(angkaPalindrome(1000)); // Output: 1001
console.log("Angka Palindrome terdekat Done")
console.log("")

// function angkaPalindrome(num) {
//     // you can only write your code here!
//     if (typeof num == 'number') {
//       let str = num.toString();
//       let angkaPalindrome1 = ""; 

//       for(let i = str.length - 1 ; i >= 0; i--){
//         angkaPalindrome1 += str[i];
//       } 

//       console.log(angkaPalindrome1)

//       if (angkaPalindrome1 == str){
//         return true;
//       }else {
//         return false
//       }   
//     }else{
//       console.log(typeof num)
//       return false // jika type bukan num
//     }
// }
//   // TEST CASES
//   console.log(angkaPalindrome(8)); // 9
//   console.log(angkaPalindrome(10)); // 11
//   console.log(angkaPalindrome(117)); // 121
//   console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001