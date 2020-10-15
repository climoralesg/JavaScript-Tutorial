//este se complementa con cargaModulos.js

const os= require ('os');
let nombre=require("./cargaModulos.js");
let persona=require("./clase");
//si el module.exports esta debajo se puede acceder directamente persona.Caminar();
let personaObj=new persona();
console.log(os);
//let {incrementar, obtenerContador}=require("./cargaModulos.js"); //con esto abajo se borraria "nombre"
console.log("plataforma ",os.platform());

//console.log(nombre); hay que borrar los otros para que funcione

nombre.incrementar();
nombre.incrementar();
nombre.incrementar();

console.log(nombre.obtenerContador());

personaObj.Caminar();