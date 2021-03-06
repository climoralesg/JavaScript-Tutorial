/*
//VARIABLES EN JS
Antes existia solo var, pero ahora se incluyerton let y const que buscan reemplazar a var 
var: tipo de variable que en su declaracion se mueve a la parte superior del codigo
*/

console.log("Variable " + variable);
var variable = 0;
/* En este caso al declarar la variable despues, marca el dato como undefined, para evitar esto utilizar let */
//let variable=0;
/*Asi se tendra un mayor control para las variables */

console.log("1 " + y);
var y = 'var';
console.log("2 " + y);

/*Las variables de tipo const no se pueden reasignar a diferencia de las variables de tipo let */
const dato = 0;


//console.log("hola mundo");
function letTest() {
    let x = 31;
    let y = 40;

    const fn3 = (x, y) => {
        console.log("x en arrow " + x);
        console.log("y en arrow " + y);

    }

    const variable = fn3(x, y);

    if (true) {
        //console.log("let test 1 "+x);  // x mantiene su valor 31
        //x=40; // x cambia su valor a 40
        //console.log("let test 1 "+x);  // 71
        let x = 71;  // variable diferente por alcance de scoope
        console.log("let test 2 " + x);  // 71
    }
    console.log("let test 3 " + x);  // 31
}

letTest();


