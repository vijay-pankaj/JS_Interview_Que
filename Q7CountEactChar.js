/*
7. Count Characters
Description: Count each character occurrence in a string.
Example: countCharacters("hello") → {h:1, e:1, l:2, o:1}.
*/

let str="hello";
function countChar(str){
    let result={};
    for(let i=0; i<str.length; i++){
        let char=str[i]
        if(result[char]){
            result[char]++;
        }else{
            result[char]=1;
        }
    }
    return result;
}
console.log(countChar(str));