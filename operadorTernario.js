/*
El operador ternario (?:) nos ofrece una manera propia de hacer estructuras condicionales.
Este operador simplifica mucho la sintaxis propia de los condicionales, pero se desaconseja
su uso para operaciones o evaluaciones múltiples.

condicion ? expresion1: expresion2
variable = condición ? valor si cierto : valor si falso

la multiple se desaconseja totalmente

condicion ? (
    expresion1,
    expresion2,
    otraexpresion
) : (
    expresion1,
    expresion2,
    otraexpresion
);

1 condicion ? expresion1 : condicion2 ? expresion1 : expresion2;

*/

var esMiembro = true;
console.log("El pago son " + (esMiembro ? "20.00€" : "50.00€"));

let numero = 10;
console.log("El pago son " + (numero >= 11  ? "20.00€" : "50.00€"));
