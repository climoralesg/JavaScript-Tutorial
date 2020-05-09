//ANIDACION
//dentro de una funcion se pueden crear nuevas funciones al igual que variables de todo tipo

function saludar(quien) {
    function alertaSaludo() {
        console.log("hola " + quien);
    }
    return alertaSaludo;
}

var saluda = saludar("Amigo/a");
saluda();

//Ambito(Scope)
//ESTO VA APARTE

//FUNCIONES ANONIMAS
/*
en js podemos crear tantas funciones como queramos,
sin embargo entre los requisitos de creacion no esta incluir un nombre necesariamente
*/

//funciones que retornan funciones

function saludo (quien){
    return function(){
        console.log("hola "+ quien)
    }
}

var saluda=saludo("Claudio");
saluda();

//podemos ejecutar ambas funciones, sin asignar una variable necesariamente

function saludoII(quien){
    return function(segundo){
        console.log("hola " + quien+" "+segundo);
    }
}

saludoII("Pepe")("Joselito");

//FUNCIONES ANONIMAS AUTOEJECUTADAS
/** es uno de los patrones mas clasucos utilizados en js, para encapsular el codigo y prevenir que pueda 
 * ase alterado desde el exterior
 */
