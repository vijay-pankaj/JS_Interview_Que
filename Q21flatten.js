// 21. Flatten Nested Array
// Example: flatten([1,[2,[3,4]],5]) → [1,2,3,4,5].

function flatten(arr){
    return arr.flat(Infinity);
}
// console.log(flatten([1[2[3,4]],5]))
console.log(flatten([1,[2,[3,4]],5]))