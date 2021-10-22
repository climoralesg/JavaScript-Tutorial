/*sirve para mejorar la recursividad
cuando hacemos varios llamados recursivos en JS
algunas veces manda error que es 
Maximun call stack size exceeded
pasa cuando se ha llamado a la funcion mas veces de lo 
permitido por lo que esta limitado el llamado a funciones recursivas
Trampolines nos permite hacer llamados a funciones cuantas veces queramos
eliminando la barrera del tail call optimization */

const trampoline=fn=>(...args)=>{
    let result=fn(...args)
    while(typeof result==='function'){
        result=result()
    }
    return result
}

/*
const suma = (number, sum=0 ) => (
    number===0 
    ? sum
    : suma(number-1,sum+number)
)
*/

const suma = (number, sum=0 ) => (
    number===0 
    ? sum
    : () => suma(number-1,sum+number)
)

const tsuma=trampoline(suma)
const r=tsuma(1000000)
//const r = suma(1000000); // da error de memoria
console.log(r);