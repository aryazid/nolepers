//Soal 1
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  const obej = {};
  
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    // cek primanya
    if (angka % i === 0) {
      obej[angka] = false;
      return false;
    }
  }
  obej[angka] = true;
  return true;
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

//Soal 2
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  const obj = {}
  if (angka1 && angka2 % 12 === 0) {
    obj[angka1, angka2];
    return angka1 /2 && angka2 /2;
  }
  // you can only write your code here!
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

