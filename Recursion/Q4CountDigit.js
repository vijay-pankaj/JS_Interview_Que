//Count Digits Recursively.
let num=12345;
let count=0;
function countDigit(num,count){
if(num==0)return count;
num=Math.floor(num/10);
count++;
return countDigit(num,count);
}
console.log(countDigit(num,count));