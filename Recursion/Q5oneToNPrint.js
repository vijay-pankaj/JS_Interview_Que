//Print Numbers N to 1.
let n=10;
function printNum(n) {
    if(n==0)return;
    console.log(n);
    printNum(n-1);

}
printNum(n);