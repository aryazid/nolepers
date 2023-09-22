/* Soal 1
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    //code disini
    for (let i = 0; i < arrNumber.length; i++) {
      for (let j = 0; j < arrNumber.length - i - 1; j++) {
        if (arrNumber[j] > arrNumber[j + 1]) {
          // Ganti element kalo abis
          let temp = arrNumber[j];
          arrNumber[j] = arrNumber[j + 1];
          arrNumber[j + 1] = temp;
        }
      }
    }
    return arrNumber;
}
  
function getTotal(arrNumber) {
    //code disini
    if (arrNumber.length === 0) {
      return '';
    }
  
    let highestNumber = arrNumber[arrNumber.length - 1];
    let count = 0;
  
    for (let i = arrNumber.length - 1; i >= 0; i--) {
      if (arrNumber[i] === highestNumber) {
        count++;
      } else {
        break; // Berhenti count jika bertemu angka berbeda, (Array sudah sort)
      }
    }
  
    return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${count} kali`;
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''
  console.log("=======================")

/* Soal 2
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  const vowelMap = {
    a: 'b', i: 'j', u: 'v', e: 'f', o: 'p',
    A: 'B', I: 'J', U: 'V', E: 'F', O: 'P'
  };

  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += vowelMap[char] || char;
  }

  return result;
}

  
function reverseWord(str) {
  //Code Disini
  return str.split('').reverse().join('');
}

function setLowerUpperCase(str) {
  //Code Disini
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  //Code Disini
  return str.replace(/\s/g, '');
}

function passwordGenerator(name) {
  //Code Disini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    let result = changeVocals(name);
    result = reverseWord(result);
    result = setLowerUpperCase(result);
    result = removeSpaces(result);
    return result;
  }
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  console.log("====================")

