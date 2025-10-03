/*32. Longest Consecutive Sequence
Example: [100,4,200,1,3,2] → 4.
*/
function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let longest = 1;
  let currentStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } 
    if (nums[i] === nums[i - 1] + 1) {
      currentStreak++;
      longest = Math.max(longest, currentStreak);
    } else {
      currentStreak = 1;
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
