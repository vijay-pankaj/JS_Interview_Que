/*
10. Reverse Words
Description: Reverse the order of words in a string.
Example: reverseWords("Hello world") → "world Hello".
*/
let str="Hello world";
let revWord="";
let word="";
for(let i=0; i<str.length; i++){
    if(str[i]!==' ' && str[i]!==undefined){
        word+=str[i];
    }else{
        revWord=word+(revWord?" "+revWord:"");
        word="";
    }
}
revWord = word + (revWord ? " " + revWord : "");
console.log(revWord);