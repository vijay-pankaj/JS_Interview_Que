/**
48. Roman to Integer
Example: "XIV" → 14. 
*/
function romanToInt(s) {
  const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = map[s[i]];
    let next = map[s[i+1]];

    if (next && curr < next) {
      total += next - curr;
      i++; 
    } else {
      total += curr;
    }
  }

  return total;
}

console.log(romanToInt("XIV")); 
console.log(romanToInt("LVIII"));
