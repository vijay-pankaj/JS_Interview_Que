/*
1. Reverse a String
Description: Create a function that takes a string (like "hello") and returns it in reverse order.
Example: reverseString("hello") → "olleh".
*/

let str="hello";
let revstr="";
let j=str.length-1;
while(j>0){
    revstr+=str[j];
    j--;
}
console.log(revstr)