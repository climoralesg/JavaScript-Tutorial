//USO NORMAL
function sumar(a,b){
    return a+b;
}

console.log("la suma es ",sumar(1,2))

//Exceso de paramtros

//toma los dos primeros
function sumarExcesoParametros(p1,p2){
    console.log("suma: ",p1+p2);
}

sumarExcesoParametros(2,3,"mas datos...",45,true);

//la falta de argumento crea un valor indefinido

function testeado(p1,p2){
    console.log("p1: ",p1);
    console.log("p2: ",p2);
}
testeado(2); //p1: 2 p2: undefined

//PARAMETROS OPCIONALES

function userID(nombre,numero){
    // este operador se equivoca con el 0 -entre otros por eso no es recomendable usarlo
    numero=numero || "000000E";
    console.log("ID: ", nombre + "-" + numero);

}

userID("Claudio",26); //Claudio-26
userID("Juanin",);// juanin-000000E
userID("Pepe",0);//Pepe- 000000E

// es recomendable usar la comparacion con if

function sumarAlternativa(a,b){
    if(typeof b ==='undefined'){
        b=0;
    }
    return a+b;
}

console.log(sumarAlternativa(2));//2
console.log(sumarAlternativa(2,8)); // 10

//OBJETOS COMO ARGUMENTO

contactos=[];
function crearContacto(nombre,usuarioTwitter,referencias,notas,fotoUrl){
    contactos.push({
        "nombre":nombre,
        "@":"@"+usuarioTwitter
    })
}

crearContacto("Oscar", "inventado", "amigos...", "etc...", "más cosas...");
//se puede refactorizar enviando un array y accediendo a el como ej datos.nombre
/*  
contactos = [];
 function crearContacto (datos){
 contactos.push({
 "nombre": datos.nombre,
 "@": "@" + datos.twitter
 })
 }
 // Puedo pasar los atributos en el orden que quiera
 crearContacto({twitter: "inventado", nombre: "Pepe", fotoUrl: "http..."});

*/

//FUNCION ARGUMENTS
function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
  }
  
  func1(1, 2, 3)



