function changeVocals (str) {
    for (let i = 0 ; i < str.length; i++){
      if (str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o" || 
      str[i] === "A" || str[i] === "I" || str[i] === "U" || str[i] === "E" || str[i] === "O"){
        let saat = String.fromCharCode(str[i].charCodeAt(0)+1);
        str = str+saat;
      } else {
        str = str + str[i];
      }
    } return str
      //code di sini 
  }
  console.log(changeVocals("AsaH"));


  function virusCheckRecursive(str, viruses) {
    //code here
    if (!viruses) {
      return 'There is no virus'
    }
    if (str.length === 0) {
      return 0;
    } else {
      let substr = str[0];
      for (let i = 0; i < viruses.length; i++) {
        if (substr.toLowerCase() === viruses[i].toLowerCase()) {
          return 1 + virusCheckRecursive(str.slice(1), viruses)
        }
      }
      return 0 + virusCheckRecursive(str.slice(1), viruses)
    }
  }