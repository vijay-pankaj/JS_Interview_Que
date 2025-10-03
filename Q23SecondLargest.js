/*23. Second Largest Number
Example: [1,5,3,9,7] → 7.
*/
const arr=[1,5,3,9,7];
// // let maxNum=INT_MIN;
// let maxNum=Math.max(...arr);
// console.log(maxNum);
let maxValue=arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>maxValue)maxValue=arr[i];
}
console.log(maxValue)

let SecondMax=arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>SecondMax && arr[i]!=maxValue)SecondMax=arr[i];
}
console.log(SecondMax);