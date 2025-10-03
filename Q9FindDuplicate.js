/*9. Find Duplicates
Description: Identify duplicates in an array.
Example: findDuplicates([1,2,2,3,4,4]) → [2,4].
*/
const arr=[1,2,2,3,4,4];
const duplicateint=[];
for(let i=0; i<arr.length; i++){
    let check=false;
    let duplicate=false;
    for(let m=i+1; m<arr.length; m++){
        if(arr[i]==arr[m])duplicate=true;
    }
    for(let j=0; i<duplicateint.length; j++){
        if(arr[i]==arr[j])check=true;
    }
    if(duplicate && !check)duplicateint.push(arr[i]);
}
console.log(duplicateint);