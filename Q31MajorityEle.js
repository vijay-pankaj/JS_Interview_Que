/*
31. Majority Element
Example: [3,3,4,3,5,3] → 3.
*/
let arr=[3,3,4,3,5,4,4,4,4,3];
let count=0;
let ele;
for(let i=0; i<arr.length; i++){
    let currentcount=0;
    for(let j=0; j<arr.length; j++){
        if(arr[i]===arr[j])currentcount++;
    }
    if(currentcount>count){
        count=currentcount;
        ele=arr[i];
        
    }
}
console.log(ele);