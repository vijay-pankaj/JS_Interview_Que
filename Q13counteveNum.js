/*
13. Count Even Numbers up to n
Example: countEven(10) → 5.
*/
let n=10;
let countEve=0;
for(let i=1; i<=n; i++){
    if(i%2==0)countEve++;
}
console.log(countEve);