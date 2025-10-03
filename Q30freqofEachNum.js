/*
30. Frequency of Array Elements
Example: [1,2,2,3,3,3] → {1:1,2:2,3:3}.
*/
const arr=[1,2,2,3,3,3];
let result ={};
for(let i=0; i<arr.length;i++){
    let n=arr[i];
    if(result[n]){
        result[n]++;
    }else{
        result[n]=1;
    }
}
console.log(result);