function randomint(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(randomint(1,10));