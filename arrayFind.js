/*
El método find () devuelve el primer valor que coincide de la colección.
 Una vez que coincida con el valor en los resultados, no verificará los 
 valores restantes en la colección de matriz.

El método filter () devuelve los valores coincidentes en una matriz de la colección.
 Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.


*/
const mascotas=[
    {nombre:'cachucho',edad:7, raza:'perro'},
    {nombre:'chanchito feliz',edad:3, raza:'gato'},
    {nombre:'pulga',edad:8, raza:'perro'},
    {nombre:'pulga',edad:8, raza:'gato'},
    {nombre:'totti',edad:2, raza:'perro'}
];

let encuentraMascota=mascotas.find(function(mascota){
    return mascota.nombre === "pulga";
})

console.log(encuentraMascota);