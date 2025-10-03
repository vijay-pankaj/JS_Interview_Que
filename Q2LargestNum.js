/*
2. Find the Largest Number
Description: Write a function that takes an array of numbers and returns the largest number.
Example: findLargest([1,5,8,6,7]) → 8.
*/
const arr=[1,5,8,6,7];
let LargestNum=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>LargestNum)LargestNum=arr[i];
}
console.log(LargestNum)