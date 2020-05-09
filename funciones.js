//FUNCIONES
/*el orden de los parametros es importante la posicion puede
alterar enormemente la usabilidad a la hora de la ejecucion, por eso el orden siempre sera

parametros fijos(primero)
parametros opcionales (despues)*/

function sumar(p1,p2){
    console.log("Suma: ",p1+p2);
}

//para las funciones no es mucho problema agregar muchos parametros
// Pasando Argumentos
sumar(2, 3, "más datos...", 45, true);

//Ejecutar funciones
console.log("Nan ",isNaN(NaN));

var miFuncion=function(){
    console.log("Hola!");
}

function otraFuncion() {
    console.log("hola nuevo");
}

var obj={
    metodo:function(){
        console.log("hola.. ahora como metodo");
    }
}

miFuncion();
otraFuncion();
obj.metodo();

//parametros opcionales
