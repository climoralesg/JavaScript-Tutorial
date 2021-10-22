/* Operador spread es ... nos permite agregar llamar una informacion de un objeto
 de una forma "masiva"
*/
const perfil = {
    nombre: 'Gerardo',
    info: {
        direccion: 'mackay'
    }
}

const region = {
    pais: 'Mexico',
    info: {
        coordenadas: '1234'
    }
}

const social = {
    twitter: '@gerar'
}

const resultado1={
    ...region
}

const resultado2={
    ...region,
    ...perfil,
    ...social,
    nombre: 'Cambio de nombre'
}

const resultado3={
    ...region,
    ...perfil,
    ...social,
    info:{
        ...perfil.info,
        ...region.info
    }
}
console.log(resultado1);
//importa el orden de los facores
console.log(resultado2);

console.log(resultado3);