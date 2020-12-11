//Array
/* Son estructuras que nos sirven para almacenar informacion */

//MANEJO

//Creando un array

var arreglo = [];

//con elementos
var arreglo1 = [1, "platano", "piscina", "manzana", true];

//usando el indice
console.log("arreglo1[1] ", arreglo1[1]);

//cambiar un valor del indice

var arreglo2 = [1, "platano", "piscina", "manzana", true];
arreglo2[0] = "fresa";
arreglo2[4] = "pera";
arreglo2[2] = "limon";

console.log("arreglo2[1] ", arreglo2[0])

//Borrando elementos
/* en ocasiones queremos dejar un hueco y no cambiar el orden de los elementos de una rray
en estos casos lo mejor es sustituir el valor por undefined ya sea usando delete o igualando.*/

arreglo2[0] = undefined;
delete arreglo2[1];

for (let i = 0; i < arreglo2.length; i++)
    console.log("arreglo2 [", i, "] =", arreglo2[i]);

console.log(arreglo2);

//PROPIEDADES
//.length se puede saber cuantos elementos tiene un array 
var arreglo3 = [1, "plátano", "manzana"];
console.log(arreglo3.length);

var numeros = [1, 2, 3, 4, 5];
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i] *= 10);
}

//METODOS

//.isArray() retorna un boleano en funcion desi el parametro es un array o no

var arreglo4 = [1, 2, 3];
//true
console.log(Array.isArray([1]));
console.log(Array.isArray(arreglo4));

//false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));

//.sort() permite organizar los elementos de un array, por orden alfabetico o en funcion numerica (ascendente)

var frutas = ['plátano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
frutas.sort(); // ["Limón", "Mango", "Manzana", "Naranja", "plátano"]
var numeros = [0, 45, 2, -5, 123, -47];
numeros.sort() // [-47, -5, 0, 123, 2, 45]

//algunas veces el ordenado no puede funcionar como esperamos, si los elementos que componen el array son de una naturaleza
//distinta

var miArray = ['uno', 2, true, 'más datos...'];
miArray.sort(); // [2, "más datos...", true, "uno"]

//.reverse() invierte el orden de un array
var miArray2 = ['uno', 2, true, 'mas datos...'];
console.log(miArray2);
miArray2.reverse();
console.log(miArray2);

//.join() retorna una cadena con todos los elementos de array dentro (reemplaza)
var array = ['dato1', 2, 'masDatos'];
var datosJuntos = array.join(); // 'dato1,2,masDatos'
var datosJuntos2 = array.join(''); // 'dato12masDatos'
var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
console.log(datosJuntos);
console.log(datosJuntos2);
console.log(datosJuntos3);

//.toString() retorna una cadena de texto con todos los elementos

var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
console.log(amigos.toString());

//.toLocateString() retorna como string (configuracion regional) todos los elementos

var numero = 1337.89;
var fecha = new Date();
var miArray3 = [numero, fecha, 'mas datos'];

var arrayConvertida = miArray.toLocaleString();
console.log(arrayConvertida);

//.concat() retorna un nuevo array con los arrays especificados concatenados
//dos arrays:

var arreglo5 = ['a', 2, true];
var arreglo6 = [1, 2, 4];
var nuevaArray = arreglo5.concat(arreglo6);
console.log(nuevaArray);

// multiples arrays
var arreglo7 = ['a', 2, true];
var arreglo8 = [1, 2, 4];
var otroArreglo = ['abc', 1, false]
var nuevaArray2 = arreglo7.concat(arreglo8, [5.25, 100], otroArreglo);
console.log(nuevaArray2);

//.indexOf() devuelve la posicion donde encuentra el elemento en si o -1, si no lo encuentra

var array2 = [2, 5, 9];
console.log(array2.indexOf(9)); //2
console.log(array2.indexOf(12)); // -1