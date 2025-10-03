function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}
console.log(mergeObject({a:1},{a:2,b:3}));