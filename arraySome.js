const mascotas=[
    {nombre:'cachucho',edad:7, raza:'perro'},
    {nombre:'chanchito feliz',edad:3, raza:'gato'},
    {nombre:'pulga',edad:8, raza:'perro'},
    {nombre:'pulga',edad:8, raza:'gato'},
    {nombre:'totti',edad:2, raza:'perro'}
];

let resultadoMascotas=mascotas.some(function(mascota){
    return mascota.edad==8;
})

console.log(resultadoMascotas);