/*
    El closure es la combinacion entre una funcion y el ambito lexico
    en la cual ha sido declarada dicha funcion.

    Un Closure recuerda el ambito donde ha sido declarado

*/
var saveCoins=1;
const moneyBox=()=>{ //fatArrowFunction
    saveCoins=0; // con let igual se puede
    const countCoins=(coins)=>{
        saveCoins+=coins;
        console.log("MoneyBox"+saveCoins);
    }
    return countCoins;
};

let myMoneyBox=moneyBox();

myMoneyBox(4);
myMoneyBox(6); // Recuerda la asignacion del valor anterior
myMoneyBox(5);

console.log("Save coins",saveCoins);

