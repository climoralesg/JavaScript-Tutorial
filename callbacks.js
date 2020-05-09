/**es una tecnica de programacion y no una facilidad del lenguaje, no es una palabra reservada
 * 
 * Cuando cierta funcion termina de realizar 
 * todo lo que tiene que hacer, ejecutara un funcion
 * que le fue pasada como argumento
 */

 //SIN CALLBACKS
function primerPasoSC(){
    console.log("es el primer paso sin callbacks");

}

function segundoPasoSC(){
    console.log("Este es el segundo paso sin callbacks");
}
primerPasoSC();
segundoPasoSC();

//CON CALLBACKS

function primerPasoCC(callback){ //probe con otro nombre de funcion a parte de callback y funciona igual
    console.log("Este es el primer paso con callbacks");
    callback();
};

function segundoPasoCC(){
    console.log("Este es el segundo paso con callbacks");
};

primerPasoCC(segundoPasoCC);

/*cuando nuestro codigo se ejecute de forma asincrona, la unica forma de conservar el flujo 
en orden, sera utilizando entre otras cosas callbacks o promesas, como veremos a continuacion */

//EJEMPLO MAS PROFUNDO

/*
declaramos una funcion que espera dos parametros
    - parametro
    - callback
*/

var quieroCallback=function(p1, callback){
    //consideramos el callback como algo opcional
    if(callback){
        //validamos si es una funcion o no

        if(typeof callback==='function'){
            
            callback(p1) // funcion(val)

        }else{
            /* si no se trata de una funcion
            simplemente mostramos ambos datos */
            console.log(p1,callback);
        }

    }
}

quieroCallback('a','b');

quieroCallback('a',function(val){
    console.log(val);
})


//SOBREVIVIR AL CALLBACK HELL
/* 
callback hell es una situacion que se suele producir cuando los programadores
no dominan el manejo de la asincronia, ni el uso de los callbacks, tambien se produce,
cuando no han respetado los conceptos basicos de modularizacion y prevencion de anidacion desmedida.

algunas soluciones a este problema

    -no anidar en exceso, estudiar soble la complejidad ciclomatica
    -cualquier anidacion de funciones a mas de dos o tres niveles esta pidiendo a gritos una refactorizacion
    -no todas las funciones de tu codigo han de ser anonimas
    -modularizar y refactorizar son tus dos mejores amigos en JS
    -gestiona los errores en cada funcion y no al final de la pila

si aun asi te ves totalmente incapaz de prevenit este error, siempre puedes recurrir a 
    -generadores
    -promesas
    -funciones async
    -librerias
        Async
        Q


*/