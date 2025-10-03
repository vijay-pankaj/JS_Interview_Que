/*
33. Subarray with Sum k
Example: [1,2,3,4], k=5 → [[2,3],[1,4]].
*/

function subarraysWithSumK(arr, k) {
  const result = [];

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum += arr[end];
      if (sum === k) {
        result.push(arr.slice(start, end + 1));
      }
    }
  }

  return result;
}

console.log(subarraysWithSumK([1,2,3,4], 5));
