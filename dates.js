/* Manejo de fechas 

en JS el manejo de fechas es complejo y poco intuitivo, lo que existen muchas librerias 
que nos facilitan la vida

    Dates.js nos permite una manipulacion rapida y precisa con una sintaxis muy intuitiva
    Momments.js nos aporta mejoras en la sintaxis, ademas de un complemento para gestionar zonas horarias
    timeago nos permite convertir fechas de forma dinamica*/

/* para trabajar las fehcas de inicia instanciando a Date() */

//FECHA ACTUAL

var ahora=new Date();
console.log(ahora);

//usando milisegundos (desde el 1/1/1970 00:00)
var diaDespues=new Date(3600*24*1000)
console.log(diaDespues);

//usando cadenas de texto poco recomendable
let newYearUno=new Date("January 1, 2016 00:00:00");
console.log(newYearUno);

//usando numeros recomendable pero complejo a la vista
let newYearDos=new Date(2016,1,1);// AAAA, MM, DD

let newYearTres=new Date(2016,1,1,0,0,0);// AAAA, MM, DD, HH, MM, SS
console.log(newYearDos)

//USANDO UTC
var newYearCuatro=new Date(Date.UTC(2016,1,1));
console.log(newYearCuatro);

//METODOS
