//Reverse Number. Example: 456 → 654.
let num=456;
let rev=0;
while(num){
    let rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
}
console.log(rev);