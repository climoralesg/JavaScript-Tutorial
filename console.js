// algunas funciones de console mas famosas

//DESTACADOS
//.assert() aparece si un mensaje de error es falsa, no pasa nada si es verdadera
var controlador=false;
console.assert(controlador,  "\"controlador\" es igual a \"false\"");

//.dir() retorna una lista interactiva con las propiedades de un objeto 
    //console.dir(document.body);

//.dirxml() retorna la representacion html del objeto
    //console.dirxml(document.body);



//.clear() limpia la consola
//console.clear();

//AGRUPADORES

//.group() crea un grupo de mensajes de consola
//.groupEnd () cierra el grupo de mensajes
//groupCollapsed() crea un grupo de mensajes de consola minimizados por defecto

console.groupCollapsed("bucleFor");
for(var i=100; i>0;i--){
    console.info("iteracion numero %i ",i);
}
console.groupEnd();

//TABLAS

//.table() muestra los datos dentro de una tabla 

var lenguajes=[
    {nombre:"Javascript",extension:".js"},
    {nombre:"Typescript",extension:".ts"},
    {nombre:"CoffeeScript",extension:".coffe"}
];

console.table (lenguajes);
console.table (lenguajes,['extension']);

// GESTION DE TIEMPO 

//.time() inicia contador en ms 
//.timeEnd() para el contador y devuelve el resultado

console.time("Medicion de miArray");

var miArray=new Array(1000000);
for(var i=miArray.length-1; i>=0;i--){
    miArray[i]=new Object();
};
console.timeEnd("Medicion de miArray");

//NOTIFICADORES
//.log() saca un mensaje por consola
console.log("hola este es el formato clasico");

//.info() saca un menaje por consola con un estilo informativo

console.info("Hola en formato informativo");

// .warn() saca un mensaje por consola con un estilo alerta

console.warn("hola en formato alerta");

//error() saca un mensaje por consola de error, con los mismos estilos, creando confusion , NO SE RECOMIENDA SU USO

console.error("hola en formato error");



