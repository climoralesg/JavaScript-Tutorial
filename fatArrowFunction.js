//fat arrow function

function fn1(a,b){
    return a+b
}

const resultado1=fn1(1,2)
console.log(resultado1)

/*fat arrow function viene con un 
return implicito en la primera linea
en este caso antes del a+b*/
const fn2 = (a,b) => a+b
const resultado2=fn2(1,2)
console.log(resultado2)

const fn3=(a,b)=>{
    return a+b
}

const resultado3=fn3(1,2)

console.log(resultado3)
