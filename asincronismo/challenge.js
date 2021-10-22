//fetch es la forma moderna, ese ya incluye promesas
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API='https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); // el tercer valor activa el asincronismo
    xhttp.onreadystatechange = function (event) { // escucha un element, si este cambio sucede ejecuta una funcion
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){
                //El standard de un callback es pasar el primer elemento el error si no hay es null
                callback(null,JSON.parse(xhttp.responseText)); // repuesta en texto se partea
            }else{
                const error = new Error('Error' +url_api);
                //El standard de un callback es pasar el primer elemento el error
                return callback(error ,null); // no envio ningun resultado
            }
        }
    }
    xhttp.send();
}


fetchData(API, function(error1,data1){
    if(error1){
        return console.error(error1);
    }else{
        console.log("data",data1.results[0].id);
        fetchData(API + data1.results[0].id,function(error2,data2){
            if(error2){
                return console.error(error2);      
            }else{
                fetchData(data2.origin.url,function(error3,data3){
                    if(error3){
                        return console.error(error3);
                    }else{
                        console.log(data1.info.count);
                        console.log(data2.name);
                        console.log(data3.dimension);
                    }
                })
            }
        });
    }   
        
})



/*
if (xmlhttp.readyState==4) indica que se ha recibido la información solicitada del servidor.

Puede tomar los siguientes valores:

0: no inicializado. Indica que no se ha abierto la conexión con el servidor (no se ha llamado a open)

1: conexión con servidor establecida. Indica que se ha abierto la conexión pero todavía no se ha enviado la petición (no se ha llamado a send)

2: recibida petición en servidor. Indica que el servidor ya ha recibido la petición (se ha llamado a send)

3: enviando información. Se está enviando la información por parte del servidor, todavía no se ha completado la recepción.

4: completado. Se ha recibido la información del servidor y está lista para operar con ella.


xhttp.status
	
Código numérico entero enviado por el servidor que indica el tipo de respuesta dada a la petición. Puede tomar valores como:

200: respuesta correcta.

404: no encontrado.

500: error interno del servidor.

*/