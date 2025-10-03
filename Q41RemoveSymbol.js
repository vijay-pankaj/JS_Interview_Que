/*
41. Remove Characters Except Alphabets
Example: "he@ll#o12" → "hello".
*/
let str="he@ll#o12"
let newstr="";
for(let i=0; i<str.length; i++){
    if(str[i]>='a'&&str[i]<='z'||str[i]>='A'&&str[i]<='Z'){
        newstr+=str[i];
    }
}
console.log(newstr);