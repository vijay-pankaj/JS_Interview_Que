/*
45. Longest Substring Without Repeating Characters Example: "abcabcbb" → "abc".
*/
let str="abcabcbb";
let uniqstr=""
for(let i=0; i<str.length; i++){
    let freq=false;
    for(let j=0; j<uniqstr.length; j++){
        if(str[i]==uniqstr[j])freq=true;
    }
    if(!freq)uniqstr+=str[i];

}
console.log(uniqstr);