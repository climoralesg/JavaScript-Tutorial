var hello= 'Hola';
var globalVar="variable";
const helloWorld =()=>{
    var globalVar='im global'
}

helloWorld();
console.log(globalVar); // Envia Error


/*

const define constantes, pero si no tenemos cuidado se pueden modificar. Tiene alcance de bloque, como let.
var define variables con un alcance de función (el contexto actual).
let define variables con un alcance de bloque y a partir de la línea en la que se declaran.
Si no declaramos un identificador, se creará como una variable global a menos que nuestro código sea declarado "estricto".
*/