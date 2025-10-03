/*
11. Merge Two Objects
Description: Merge two objects; later keys overwrite earlier ones.
Example: mergeObjects({a:1},{a:2,b:3}) → {a:2,b:3}.
*/
function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}
console.log(mergeObject({a:1},{a:2,b:3}));


