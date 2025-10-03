/*
25. Armstrong Number
Example: 153 → true.
*/
let num=153;
let count=0;
let sumOfNum=0;

let temp=num;
while(temp){
    temp=Math.floor(temp/10);
    count++;
}

temp=num;
while(temp){
    let rem=temp%10;
    let pow=1;
    for(let i=0; i<count; i++){
        pow*=rem;
    }
    sumOfNum+=pow;
    temp=Math.floor(temp/10);
}
console.log("given number is Armstrong :",sumOfNum===num);