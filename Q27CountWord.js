/*
27. Count Words in String
Example: "The quick brown fox" → 4.
*/
// let str="The quick brown fox";
// let word="";
// let count=0;
// for(let i=0; i<str.length; i++){
//     if(str[i]!==' '){
//         word+=str[i];
//     }else{
//         count++;
//         word="";
//     }
// }
// if(word.length>0)count++;
// console.log(count);


let str= "  The   quick brown fox"
let i=0;
let count=0;
let word="";
while(i<str.length){
    while(str[i]===' '&& i<str.length){
        i++;
    }
    while(str[i]!==' ' && i<str.length){
        word+=str[i];
        i++;
    }
    count++;
    word="";
    i++;
}
if(word.length>0)count++;
console.log(count);