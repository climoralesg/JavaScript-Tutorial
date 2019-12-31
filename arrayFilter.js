//filter sirve para tener un arreglo filtrado
 
const numeros=[1,2,3,4,5,6,7,8,9]

const mascotas=[
    {nombre:'cachucho',edad:7, raza:'perro'},
    {nombre:'chanchito feliz',edad:3, raza:'gato'},
    {nombre:'pulga',edad:8, raza:'perro'},
    {nombre:'totti',edad:2, raza:'perro'}
];

//genera un arreglo con valores filtrados
const numerosFiltrados=numeros.filter(x => x < 5 );
console.log(numerosFiltrados);
console.log(numerosFiltrados,numeros);

const perros=mascotas.filter(x=>x.raza=='perro');
const gatos=mascotas.filter(x=>x.raza=='gato');
console.log(gatos);
console.log(perros);

//console.log (mascotas,numeros);