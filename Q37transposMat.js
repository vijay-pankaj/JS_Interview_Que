/*
37. Matrix Transpose
Example:
[[1,2,3],[4,5,6]] → [[1,4],[2,5],[3,6]].
*/

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < cols; i++) {
    result[i] = [];
    for (let j = 0; j < rows; j++) {
      result[i][j] = matrix[j][i];
    }
  }

  return result;
}

console.log(transpose([[1,2,3],[4,5,6]]));
