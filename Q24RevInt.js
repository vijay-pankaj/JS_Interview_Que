/*
24. Reverse Integer
Example: reverseInt(1234) → 4321.
*/
let num=1234;
let rev=0;
while(num){
    let rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10)
}
console.log(rev)