/*
36. Shuffle Array
Example: [1,2,3,4] → [3,1,4,2].
*/

function shuffleArray(arr) {
  let result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

console.log(shuffleArray([1, 2, 3, 4]));
