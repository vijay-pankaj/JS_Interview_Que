/*
19. Array Intersection
Example: intersection([1,2,3],[2,3,4]) → [2,3].
*/
let arr=[1,2,3];
let arr2=[2,3,4];
let intersectarr=[];
for(let i=0; i<arr.length; i++){
    let check=false;
    let check1=false;
    for(let j=0; j<arr2.length; j++){
        if(arr[i]==arr2[j])check=true;
    }
    for(let m=0;m<intersectarr.length; m++ ){
        if(arr[i]==intersectarr[m])check1=true;
    }
    if(check && !check1)intersectarr.push(arr[i]);
}
console.log(intersectarr);