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
/*Todos aquellos métodos que son susceptibles de sufrir variaciones por la zona
horaria, cuentan con un “método clon” que realiza la misma función, pero siguiendo
las especificaciones de la UTC, como veremos a continuación.

Por otro lado, los meses y los días de la semana, empiezan a contarse desde el
0, y los días de la semana empiezan en domingo siendo este el día 0. El resto de
componentes no sufren modificaciones (año, día del mes, etc..). */


//GETER
// Versión UTC:
var ahora = new Date();
console.log("Con UTC: ");
console.log("==== FECHA ====");
console.log("El año: " + ahora.getUTCFullYear()); // 4 dígitos
console.log("El mes: " + ahora.getUTCMonth()); // 0 - 11
console.log("El día de la semana: " + ahora.getUTCDay()); // 0 - 6 (D - S)
console.log("El día del mes: " + ahora.getUTCDate()); // 1-31
console.log("==== HORA ====");
console.log("Horas: " + ahora.getUTCHours());
 console.log("Minutos: " + ahora.getUTCMinutes());
 console.log("Segundos: " + ahora.getUTCSeconds());
 console.log("milisegundos: " + ahora.getUTCMilliseconds());

 //Versión Local:
var ahora = new Date();
console.log("La fecha es " + ahora);
console.log("==== FECHA ====");
console.log("El año: " + ahora.getFullYear()); // 4 dígitos
console.log("El mes: " + ahora.getMonth()); // 0 - 11
console.log("El día de la semana: " + ahora.getDay()); // 0 - 6 (D - S)
console.log("El día del mes: " + ahora.getDate()); // 1-31
console.log("==== HORA ====");
console.log("Horas: " + ahora.getHours());
 console.log("Minutos: " + ahora.getMinutes());
 console.log("Segundos: " + ahora.getSeconds());
 console.log("Milisegundos desde 1/1/1970: "+ ahora.getTime());
 console.log("milisegundos: " + ahora.getMilliseconds());
 console.log("==== OTROS ====");
 console.log("Diferencia horaria respecto a UTC: " + ahora.getTimezoneOffset());

 //Setters
 /*Los setters en el caso de las fechas están planteados como una manera de ajustar la fecha y
la hora dentro de un marco determinado. Veamos en el siguiente ejemplo:*/

//Dentro del marco
var newYear = new Date(Date.UTC(2016, 1, 1));
console.info("La fecha es " + newYear);
newYear.setFullYear(1980); // Pasamos a 1980
console.info("La fecha es " + newYear);
newYear.setUTCMilliseconds(1500); // 1500ms en formato UTC
console.info("La fecha es " + newYear);


//Fuera del marco
/*Debes tener en cuenta las leyes naturales: un día tiene 24 horas, un mes tiene un
máximo de 31 días…
Si obviamos esta lógica, JavaScript improvisa una nueva fecha, pero ésta no suele ser
correcta.*/
newYear.setDate(56); // Al día 56 de Enero
console.info("La fecha es " + newYear);
newYear.setUTCHours(36); // Pasamos a la hora 36 del día
console.info("La fecha es " + newYear);
newYear.setMonth(-6); // Retrocedemos
