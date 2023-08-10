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
