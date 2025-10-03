/*
5. Remove Duplicates
Description: Remove duplicate values from an array.
Example: removeDuplicates([1,2,2,3]) → [1,2,3].
*/
const arr=[1,2,2,3];
const newarr=[];
for(let i=0; i<arr.length; i++){
    let check=false;
    for(let j=0; j<newarr.length; j++){
        if(arr[i]==newarr[j])
            check=true;
    }
    if(!check)newarr.push(arr[i]);
}
console.log(newarr);