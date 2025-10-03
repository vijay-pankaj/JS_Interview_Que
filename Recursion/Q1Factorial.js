//Factorial Using Recursion.
let n=5;
let initial=1;
function fact(n,init){
    if(n==0){
        return init;
    }
    return fact(n-1,init*n);
}
console.log(fact(n,initial));