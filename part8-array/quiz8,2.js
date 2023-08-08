/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
function dataHandling(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Nomor ID: ${arr[i][0]}`);
      console.log(`Nama Lengkap: ${arr[i][1]}`);
      console.log(`TTL: ${arr[i][2]} ${arr[i][3]}`);
      console.log(`Hobi: ${arr[i][4]}`);
      console.log(); // Menambah baris kosong an2
    }
  }
  
  let input1 = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
  
  dataHandling(input1);
  



/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/


function dataHandling2(input) {
  
  input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Membaca", "PRIA", "SMA International Metro");
  
  let dateParts = input[3].split("/");
  // format tanggal baru "21-05-1989" using splice
  const dateFormat = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
    // ubah posisi dateParts[0] dan dateParts[2]
    [dateParts[0], dateParts[2]] = [dateParts[2], dateParts[0]];
    //date format jadi variable baru
    const modifiedDateFormat = dateParts;
    //pembatasan 15 chara
    const namaPnj = input[1].slice(0,15);

  console.log(input)
  console.log("Mei")
  console.log(modifiedDateFormat);
  console.log(dateFormat)
  console.log(namaPnj)
}
let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */