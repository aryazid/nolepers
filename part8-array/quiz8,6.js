function cariMean(arr) {
  let total = arr.length;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let mean = sum/total;
  return Math.round(mean)
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
console.log("=====================")

//tips baca dokumentasi Math js untuk pembulatan

/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. 
Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. 
Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 
60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/

// you can only write your code here!

function perkalianUnik(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let skip1arr = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        skip1arr *= arr[j];
      }
    }
    result.push(skip1arr);
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
