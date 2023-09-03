//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    let validasiAritmatika = arr[1] - arr[0];
  
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== validasiAritmatika) {
            return false;
        }
    }
    return true;
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  console.log("==========")

//tentukan apakah ini deret geometri atau bukan
function tentukanDeretGeometri(arr) {
    let validasiGeometri = arr[1] / arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] / arr[i - 1] !== validasiGeometri) {
            return false;
        }
    }
    return true;
   // you can only write your code here!
}
 
 // TEST CASES
 console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
 console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
 console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
 console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
 console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false