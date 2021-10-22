const buildCount = (i) => {
    let count = i; // Con let no se puede reasignar
    console.log("Primera ejecucion "+i);
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}
const myCount = buildCount(1);
myCount(); // Resultado : 1
myCount(); // Resultado : 2
myCount(); // Resultado : 2

/*
const myOtherCount =  buildCount(10);

myOtherCount(); // Resultado: 10
myOtherCount(); // Resultado: 11
*/