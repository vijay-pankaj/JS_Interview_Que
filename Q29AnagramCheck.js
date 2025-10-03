/*
29. Anagram Check
Example: "listen","silent" → true.
*/
let str1 = "listen";
let str2 = "silent";

function anagramCheck(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    let result = {};

    for (let i = 0; i < str1.length; i++) {
        let ch = str1[i];
        if (result[ch]) {
            result[ch]++;
        } else {
            result[ch] = 1;
        }
    }

    for (let j = 0; j < str2.length; j++) {
        let newch = str2[j];
        if (result[newch]) {
            result[newch]--;
        } else {
            return false;
        }
    }

    for (let key in result) {
        if (result[key] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(anagramCheck(str1, str2));
