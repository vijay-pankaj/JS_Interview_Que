/*17. Factorial (Recursion)
Example: factorial(5) → 120.
 */
let n=5;
let fact=1;

function facto(n,fact){
if(n==0)return fact;
return facto(n-1,fact*n);
}
let factoVal=facto(n,fact);
console.log(factoVal)