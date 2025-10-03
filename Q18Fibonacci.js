/*
18. Fibonacci Sequence
Example: fibonacci(5) → [0,1,1,2,3].
*/
let n=8;
let n1=0,n2=1;
console.log(n1);
console.log(n2);
for(let i=1; i<=n-2; i++){
    let next=n1+n2;
    n1=n2;
    n2=next;
    console.log(next);
}