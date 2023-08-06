//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
// ---------------------------------------
console.log(word,second,third,fourth,fifth,sixth,seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = 'wow JavaScript is so cool';
let FirstWord = word2[0] + word2[1] + word2[2];
let secword = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let thirdword = word2[15] + word2[16];
let fourthword = word2[18] + word2[19];
let fifthword = word2[21] + word2[22] + word2[23] + word2[24];

console.log(FirstWord + " " + secword + " " + thirdword + " " + fourthword + " " + fifthword);

// ---------------------------------------
console.log(' ');
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let secword2 = word3.substring(4,14);
let thirdword2 = word3.substring(15,17);
let fourthword2 = word3.substring(18,20);
let fifword2 = word3.substring(21,25)

console.log(exampleFirstWord3 + " " + secword2 + " " + thirdword2 + " " + fourthword2 + " " + fifword2);


// ---------------------------------------
console.log(' ');
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let firstWord4 = word4.substring(0, 3);
let secword4 = word4.substring(4, 14);
let thirdword4 = word4.substring(15,17);
let fourthword4 = word4.substring(18,20);
let fifword4 = word4.substring(21,25)

let firstWordLength = firstWord4.length;
let secword4Length = secword4.length;
let thirdword4Length = thirdword4.length;
let fourthword4Length = fourthword4.length;
let fifword4Length = fifword4.length;

console.log(firstWord4 + ', with length: ' + firstWordLength);
console.log(secword4 + ', with length: ' + secword4Length);
console.log(thirdword4 + ', with length: ' + thirdword4Length);
console.log(fourthword4 + ', with length: ' + fourthword4Length);
console.log(fifword4 + ', with length: ' + fifword4Length);