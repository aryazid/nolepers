/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let IndexX = -1;
  let IndexO = -1;
  let minDistance = arr.length;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
          IndexX = i;
          if (IndexO !== -1) {
              minDistance = Math.min(minDistance, Math.abs(IndexX - IndexO));
          }
      } else if (arr[i] === 'o') {
          IndexO = i;
          if (IndexX !== -1) {
              minDistance = Math.min(minDistance, Math.abs(IndexX - IndexO));
          }
      }
  }

  if (minDistance === arr.length) {
      return 0;
  }

  return minDistance;
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log("==========")




/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. 
Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:
kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
  let hasil = [[],[],[]]

  for (let i = 0; i < arr.length; i++){

    if(arr[i] % 3 === 0){
      hasil[2].push(arr[i]);}
      else if (arr[i] % 2 === 0) {
      hasil[0].push(arr[i]);}
      else {
      hasil[1].push(arr[i]);} 
    }
  return hasil
}
    // you can only write your code here!
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  console.log("========")


/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort(); // ngesort
  let hasil = []; //nampung
  let nampung = [animals[0]];

  for (let i = 1; i < animals.length; i++) {
      if (animals[i][0] === nampung[0][0]) {
          nampung.push(animals[i]);
      } else {
          hasil.push(nampung);
          nampung = [animals[i]];
      }
  }

  // naro
  hasil.push(nampung);

  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// Output: [ ['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// Output: [ ['anoa', 'ayam'], ['cacing', 'cicak'], ['kancil', 'kuda'], ['unta'] ]
