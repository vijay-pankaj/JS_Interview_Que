/*
3. Count Vowels
Description: Count how many vowels are in a given string.
Example: countVowels("vijay") → 2.
 */
let str="vijay";
let count=0;
for(let i=0; i<str.length; i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||
        str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'
    )count++;
}
console.log(count);