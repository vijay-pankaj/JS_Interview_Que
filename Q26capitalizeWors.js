/*26. Capitalize Words
Example: "hello world" → "Hello World".
*/
let str = "hello world";
let word = "";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    word += str[i];
  } else {
    if (word.length > 0) {
      newStr +=
        (newStr === "" ? "" : " ") +
        word[0].toLocaleUpperCase() +
        word.slice(1);
      word = "";
    }
  }
}
if (word.length > 0) {
  newStr +=
    (newStr === "" ? "" : " ") + word[0].toLocaleUpperCase() + word.slice(1);
}
console.log(newStr);

// let str = "hello world";
// let result = str
//   .split(" ")
//   .map(word => word[0].toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(result); // "Hello World"
