// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0;

while (i < 7){
    console.log(i)
    i++
} console.log("Looping Pertama")
while (i>=0){
    console.log(i)
    i--
} console.log("Looping kedua")

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

for (let i = 0; i<8; i++){
    console.log(i)
} console.log("LOOPING PERTAMA")

for (let i = 7; i>=0; i--){
    console.log(i)
} console.log("LOOPING KEDUA")

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

for (let i = 0; i < 100; i+=1){
    if(i % 2 === 0){
        console.log(`${i} adalah genap`)
    } else{
        console.log(`${i} adalah ganjil`)
    }
}
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
for (let i = 0; i < 100; i+=2){
    if(i % 3 === 0){
        console.log(`${i} kelipatan 3+2`)
    } else{
        console.log(`${i}`)
    }
}

for (let i = 0; i < 100; i+=5){
    if(i % 6 === 0){
        console.log(`${i} kelipatan 6+5`)
    } else{
        console.log(`${i}`)
    }
}

for (let i = 0; i < 100; i+=9){
    if(i % 10 === 0){
        console.log(`${i} kelipatan 10+9`)
    } else{
        console.log(`${i}`)
    }
}

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
//hasilnya
//*
//**
//***
//****
//*****