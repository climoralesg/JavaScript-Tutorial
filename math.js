//MATH
/* nos aporta recursos matematicos avanzados como euler, logaritmos, cosenos, senos, tangentes */

//METODOS

//.round() devuelve el valor de un numero redondeado al entero mas cercano.
Math.round(20.5); // 21
Math.round(20.49); // 20
Math.round(-20.51); // -21

//flor() devuelve el maximo entero menor o igual a un numero
console.log(Math.floor(20.5));
console.log(Math.floor(20.49));
console.log(Math.floor(-20.51));


//.random() 

console.log(Math.random()); // devuelve numero aleatorio entre 0(incluido) y 1 (excluido)

//numero aleatorio entre min (incluido) y max (excluido)
//console.log(Math.random() * (max-min)+min) ;
console.log(Math.random() * (11-0)+0) ;
//numero entero aletorio entre min (incluido ) y max (excluido)

console.log(Math.floor(Math.random() * (11 - 0)) + 0);