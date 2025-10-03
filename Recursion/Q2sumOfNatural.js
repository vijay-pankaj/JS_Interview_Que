//Sum of Natural Numbers.
let n=10;
let sum=0;
function sumOfN(n,sum){
if(n==0)return sum;
return sumOfN(n-1,sum+n);
}
console.log(sumOfN(n,sum))
