/*
4. Sum of Array
Description: Calculate the sum of all numbers in an array.
Example: sumArray([1,2,3,4,5]) → 15.
*/
const arr=[1,2,3,4,5]
let sum=0;
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}
console.log(sum);