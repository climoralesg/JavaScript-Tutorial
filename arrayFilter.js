//Array Filter sirve filtrar los elementos del Array.
 
//Declaramos variables
const numeros=[1,2,3,4,5,6,7,8,9]

const mascotas=[
    {nombre:'cachucho',edad:7, raza:'perro'},
    {nombre:'chanchito feliz',edad:3, raza:'gato'},
    {nombre:'pulga',edad:8, raza:'perro'},
    {nombre:'pulga',edad:8, raza:'gato'},
    {nombre:'totti',edad:2, raza:'perro'}
];

//Genera un arreglo con valores filtrados
//Filtrar los numeros menores a 5
const numerosFiltrados=numeros.filter(x => x < 5 );
console.log(numerosFiltrados);
console.log(numerosFiltrados,numeros);

//Filtra los objetos por raza
const perros=mascotas.filter(x=>x.raza=='perro');
const gatos=mascotas.filter(x=>x.raza=='gato');
console.log(gatos);
console.log(perros);

//console.log (mascotas,numeros);

let mascotasFiltradas=mascotas.filter(function(mascota){ // lo mismo se pude hacer con map
    return mascota.nombre=="pulga";
});

console.log("mascotas ",mascotasFiltradas);