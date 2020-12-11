//ASINCRONIA

/* Existen muchas formas de manejar la asincronia
    *Paso de continuadores(Callbacks)
    *Eventos
    *Promesas(ECMA6 y librerias)
    *Generadores
*/

function traigoDatos(){
    //asincrona
    //console.log("traigo datos");
    setTimeout(function(){
        console.log("Esto son mis datos");
    },2000)
}

function pintoDatos(){
    //no asincrona
    console.log("ya tengo los datos");
}

//traigoDatos();
//pintoDatos();

/* Como se puede ver, los mensajes no salen en el orden correcto. 
recordemos que, para pintar datos, el paso previo -siempre- es tener esos datos disponibles
*/

/* Ahora vamos a intentar resolver este problema de una manera sencilla. 
si introducimos un callback en la funcion asincrona, seremos capaces de resolver el problema... aunque tarde 3 segundos o 
5 minutos */

function traigoDatosArreglado(callback){
    //asincronia
    setTimeout(function(){
        console.log("Esto son mis datos arreglado");
        //llamamos a callback cuando haya llegado el fin de traigoDatos
        callback();
    },2000)
}

function pintoDatosArreglado(){
    //no asincrona 
    console.log("ya tengo los datos arreglado");
}


//traigoDatosArreglado(pintoDatos);

/*
al ejecutarlo podemos ver que el problema de la asincronia ha sido resulto

Normalmente, a la hora de hacer peticiones asincronas, solemos pedir/enviar informacion al servidor
y hacemos esto a traves de peticiones AJAX (tambien asincronas). cuando realizamos ese tipo de llamadas,
queremos pasarle al callback los datos que nos han llegado del servidor
*/

//como hacerlo

function traigoDatosOtro(callback){
    //asincrona
    setTimeout(function(){
        //muchas cosas pasan
        var resultado="Esto son mis datos";
        //llamamos al callback y pasamos el resultado
        callback(resultado);
    },2000)
}

function pintoDatosOtro(data){
    //no asincrona
    console.log("ya tengo los datos");
    console.log(data);
}

traigoDatosOtro(pintoDatosOtro);