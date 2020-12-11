//Spread = esparcir

/*cuando tenemos un arreglo definido y queremos dividir o esparcir el arreglo */

const arr=[1,2]

const suma=(a,b) =>a+b

const resultado=suma(arr[0],arr[1])

//con spread operator
const resultadoSpread=suma(...arr) //spread es el ...arr

arr.push(3)

console.log(arr)

//const arr2=arr // esto crea como una referencia

const arr2=[...arr]

arr.push(4)

console.log(arr2)
console.log(arr)

console.log(arr2,arr)
