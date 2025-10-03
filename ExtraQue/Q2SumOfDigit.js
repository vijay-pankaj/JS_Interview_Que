//Sum of Digits. Example: 123 → 6.
var num=123;
let sum=0;
while(num){
let rem=num%10;
sum+=rem;
num=Math.floor(num/10);
}
console.log(sum); 