//FORMATEADORES
/*
Formato Descripción
%s Cadena
%d o %i Número entero
%f Decimal
%o DOM
%O Objeto js
%c CSS
*/


//%o para estructuras del dom
var parrafos=document.getElementsByTagName("p");
console.log("DOM: %o", parrafos);

//%O para objetos JS
var objeto={"nombre":"Yo","Apellido":"Mismo"};
console.log("Objeto:%O", objeto);

//Usando css

console.log('esto es aburrido ...');
console.log('%c Pero se puede mejorar fácilmente! ', 'background: #3EBDFF; colo\r: #FFF; font-size:25px');