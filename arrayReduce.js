// reduce es un metodo que nos permiten ejecutar funciones reduce
// recibe 2 argumentos
// el primero es un valor que se esta acumulando
// el segundo es el elemento que se esta iterando del arreglo
//esta funcion devuelve un elemento que se esta acumulando

//const reducer=(acumulador, valorActual)=>nuevoAcumulador

const reducido=[1,2].reduce((acc,el)=> acc + el ,0)
//reduce((acumulador,valor actual)=>acumulador+ valor actual, donde comienza)
console.log(reducido);
const numeros=[1,2,3,4,5,6,7,8,9]

const reducidoNumeros=numeros.reduce((acc,el)=> acc + el ,0)
console.log(reducidoNumeros);


const mascotas=[
    {nombre:'cachucho',edad:7, raza:'perro'},
    {nombre:'chanchito feliz',edad:3, raza:'gato'},
    {nombre:'pulga',edad:8, raza:'perro'},
    {nombre:'totti',edad:2, raza:'perro'}
];

const indexed=mascotas.reduce((acc,el)=>({
    ...acc,
    [el.nombre]:el,    
}),{})

//console.log(indexed)

console.log("indexes", indexed['pulga'])
const anidado=[1,[2,3],4,[5]];

//1 2 3 4 5 
const plano=anidado.reduce((acc,el)=>acc.concat(el),[])
console.log(plano);

