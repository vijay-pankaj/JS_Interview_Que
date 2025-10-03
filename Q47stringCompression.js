/*
47. String Compression
Example: "aaabbc" → "a3b2c1". 
*/
let str="aaabbc";
let count=0;
let compressStr="";
for(let i=0; i<str.length; i++){
    let check=false;
    for(let j=0; j<compressStr.length; j++){
        if(str[i]===compressStr[j])check=true;
    }
    if(!check){
        for(let m=0; m<str.length; m++){
            if(str[i]==str[m])count++;
        }
        compressStr=compressStr+str[i]+count;
        count=0;
    }
}
console.log(compressStr);


// let str = "aaabbc";
// let compressStr = "";
// let count = 1; // start counting first character

// for (let i = 0; i < str.length; i++) {
//     // check next character
//     if (str[i] === str[i + 1]) {
//         count++;
//     } else {
//         // add character and count to compressed string
//         compressStr += str[i] + count;
//         count = 1; // reset count for next character
//     }
// }

// console.log(compressStr); // "a3b2c1"
