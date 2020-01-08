//Array
/* son estructuras que nos sirven para almacenar informacion */

//MANEJO

//Creando un array

var arreglo=[];

//con elementos
var arreglo1=[1,"platano","piscina","manzana",true];

//usando el indice
console.log("arreglo1[1] ",arreglo1[1]);

//cambiar un valor del indice

var arreglo2=[1,"platano","piscina","manzana",true];
arreglo2[0]="fresa";
arreglo2[4]="pera";
arreglo2[2]="limon";

console.log("arreglo2[1] ",arreglo2[0])

//Borrando elementos
/* en ocasiones queremos dejar un hueco y no cambiar el orden de los elementos de una rray
en estos casos lo mejor es sustituir el valor por undefined ya sea usando delete o igualando.*/

arreglo2[0]=undefined;
delete arreglo2[1];

for(let i=0;i<arreglo2.length;i++)
    console.log("arreglo2 [",i,"] =", arreglo2[i]);

console.log(arreglo2);

//PROPIEDADES
