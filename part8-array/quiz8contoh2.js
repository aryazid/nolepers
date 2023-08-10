function angkaPalindrome(num) {
    let str = num.toString();
    let rev=str.split("").reverse().join("");
  
    if(rev == str){
        for (let i=num ;i >= num + 1 ; i++)
        console.log(i)
    } else if (rev != str){
        for (let j=num ;j >= rev == str ; j++)
        console.log(j)
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001