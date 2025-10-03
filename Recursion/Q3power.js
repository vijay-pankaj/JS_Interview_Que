//Power Function.
const x=2;
let y=4;
result=1;
function powerofXY(){
    if(y==0)return result;
    y--;
    result=result*x;
    return powerofXY(x,y,result)
}
console.log(powerofXY(x,y,result));