const suma=(ns)=>{
    let acumulado=0;
    for(i=0;i<ns.length;i++){
        acumulado+=ns[i];
    }
    return acumulado;
}

const numeros=[1,2,3,4,5,6,7,8,9]
//map recorre todos los valores 1 por 1 y crea un nuevo arreglo
const multiplicados=numeros.map(x => x * 2);

const parejas=numeros.map(x=>[x,x]);

console.log(parejas)
console.log(multiplicados);



const mascotas=[
    {nombre:'cachucho',edad:7, tipo:'perro'},
    {nombre:'chanchito feliz',edad:3, tipo:'gato'},
    {nombre:'pulga',edad:8, tipo:'perro'},
    {nombre:'totti',edad:2, tipo:'perro'}
];

const resultadoSumaFuncion = suma(numeros);
//map aplica una funcion a los elementos
const edades=mascotas.map(x=>x.edad); // si queremos copiar solamente
console.log(edades);
const resultado=suma(edades);
console.log(resultado);
console.log(resultado/edades.length);
console.log(resultadoSumaFuncion);