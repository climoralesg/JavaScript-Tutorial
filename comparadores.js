//nos saltaremos lo de siempre y solamente nos centraremos en los nuevos 
//operadores de comparacion 

var igual = 10==10; //true
var igualTotalmente=10 === 10; // true
var igualTotalmenteEnTodo= 10==='10'; //false

// lo mismo ocurre si deseamos negacion

var noIgual = 100 != 10; // true
var noIgualCadena = 100 != "100"; // false
var noIgualTotalmente = 100 !== 10; // true
var noIgualTotalmenteCadena = 100 !== "100"; // true

//ASIGNACION POR IGUALDAD

var administrador = 'Yo mismo';
var esAdministrador = (administrador === 'Yo mismo');
console.log(esAdministrador); // true