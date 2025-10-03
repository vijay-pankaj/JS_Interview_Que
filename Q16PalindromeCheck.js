/*
palindorme check example ->"madam" 
*/
let str="madam";
let palindorme=true;
let i=0;
let j=str.length-1;
while(i<j){
    if(str[i]!==str[j]){
        palindorme= false;
        break;
    }
    i++;
    j--;
}
console.log(palindorme);