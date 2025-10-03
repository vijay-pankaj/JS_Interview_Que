/*
43. Generate All Subsets
Example: [1,2] → [[],[1],[2],[1,2]].
*/
function subsets(nums) {
  let result = [[]];

  for (let num of nums) {
    const newSubsets = result.map(sub => [...sub, num]);
    result = result.concat(newSubsets);
  }

  return result;
}

console.log(subsets([1,2]));
