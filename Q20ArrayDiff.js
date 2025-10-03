/*
20. Array Difference
Example: difference([1,2,3],[2,3,4]) → [1].
*/
// function ArrayDiff(arr1,arr2){
//     return arr1.filter((item)=>!arr2.includes(item))
// }
// console.log(ArrayDiff([1,2,3],[2,3,4]));

function difference(arr1, arr2) {
  let set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

console.log(difference([1,2,3], [2,3,4]));
