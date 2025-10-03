/*
6. Longest Word
Description: Return the longest word in a sentence.
Example: findLongestWord("The quick brown fox") → "quick".
*/

let str="The quick brown fox";
let currentstr="";
let longeststr="";
for(let i=0; i<str.length;i++){
    if(str[i]!==' ' && str[i]!==undefined){
        currentstr+=str[i];
    }else{
        if(currentstr.length>longeststr.length){
        longeststr=currentstr;
    }
    currentstr="";
}

}
console.log(longeststr)