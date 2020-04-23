
let objetoModificar={
    propiedad:"propiedad original",
}

Object.defineProperties(objetoModificar,{
    "propiedad1":{
        writable:true,
        value:"propiedad1 original"
    },

    "propiedad2":{
        value:"cadena de texto",
        writable:false
    }
});

var miObjeto={
    cadena:'esto es una cadena',
    numero:2,
    booleano:false,
    borrame:'hola',

    imprimirNumero:function(valor){
        console.log(valor);
        console.log(this.numero);
    },

    metodoObjeto:function(){
        console.log("La cadena de este objeto es: ",miObjeto.cadena);
    },

    imprimirBooleano:function(){
        console.log("El booleano es: ",this.booleano);
    }


};

miObjeto.imprimirNumero(3);
miObjeto.metodoObjeto();
miObjeto.booleano=true;
miObjeto.imprimirBooleano();

delete miObjeto.borrame;
//console.log(miObjeto.borrame);

//object define properties
console.info(objetoModificar);
console.info(objetoModificar.propiedad2);
objetoModificar.propiedad2="Propiedad2 original modificada"
Object.values(objetoModificar);
console.log(objetoModificar.propiedad2); // no la modifica
console.log(Object.getOwnPropertyDescriptor(objetoModificar,'propiedad2'));

console.log(Object.getOwnPropertyNames(objetoModificar));





