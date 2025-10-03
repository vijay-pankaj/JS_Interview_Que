/*
35. Kth Largest Element
Example: [3,2,1,5,6,4], k=2 → 5.
*/
function kthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(kthLargest([1,2,3,4,4,5,5,6,6,7],3))
36. Shuffle Array
Example: [1,2,3,4] → [3,1,4,2].