/* si deseas trabajar con unidades monetarias
se puede hacer uso de la libreria accounting.js */

//PROPIEDADES
//.max_Value() esta propiedad nos retornara el  numero (positivo) mas grande en javascript

var numero1 = 1.7976931348623157e+308;
var numero2 = 1.7976931348623157e+310

const verificadorValorMaximo=(num)=>{
    if(num<=Number.MAX_VALUE){
        console.log("El numero no es infinito");
    }else{
        console.log("El numero es infinito")
    }
}
//console.log("numero maximo "+ Number.MAX_VALUE);
verificadorValorMaximo(numero1);
verificadorValorMaximo(numero2);

//.MIN_VALUE nos retornara el numero (negativo) mas pequeño representable (5e-324)
var numero3 = 5e-323;
var numero4 = 5e-326;

const verificadorValorMinimo=(num)=>{
    if(num<=Number.MIN_VALUE){
        console.log("El numero no es infinito");
    }else{
        console.log("El numero es infinito")
    }
}

verificadorValorMinimo(numero3);
verificadorValorMinimo(numero4)

//POSITIVE_INFINITY retorna el valor de la propiedad del objeto global infinity, es decir infinity

var numeroMaximo=Number.MAX_VALUE*2;
console.log("numero maximo * 2 "+ numeroMaximo);

if(numeroMaximo===Number.POSITIVE_INFINITY){
    numeroMaximo=0;
}
console.log("numero maximo "+numeroMaximo)

/*.nan : algunas veces al realizar operaciones matematicas de forma erronea
podemos encontrarnos con que el valor de nuestra variable ha sido sustiuido por NAN
(Not A Number), este es un proceso irreversible que nos obligara a reasignar el valor de
la variable posteriormente, hasta la llegada de ecma6 la gestion y deteccion de estos valores era compleja
pero con el nuevo metodo isNan() podemos solventarlo*/ 

console.log(""+ NaN === NaN); // false
console.log(""+Number.NaN === NaN); // false
console.log(""+isNaN(NaN)); // true
console.log(""+isNaN(Number.NaN)); // true

// METODOS
//Metodos mas utilizados de NUMBER (existen mas)

//toExponential() retorna una cadena de texto con el valor de los numeros en formato potencia 
var numObj=77.1234;

console.log(numObj.toExponential());
console.log(numObj.toExponential(4));
console.log(numObj.toExponential(2));
console.log(77.1234.toExponential());

//toFixed() retorna una cadena de texto con los numeros decimales, 
//aunque no es la mejor forma, tambien podemos redondear el valor

let numObj2=12345.6789
numObj2.toFixed();
console.log("redondeado "+ numObj2);
console.log("redondeado "+ numObj2.toFixed());

//podemos alterar la longitud (numero de decimales) con el argumento que pasamos al metodo (corre hacia la izquierda)

let numObj3=12345.6789;

numObj3.toFixed();
console.log("redondeado objeto 3 "+numObj3.toFixed());
console.log("redondeado objeto 3 "+numObj3.toFixed(1));
console.log("redondeado objeto 3 "+numObj3.toFixed(6));
console.log("redondeado objeto 3 "+(1.23e+20).toFixed(2));
console.log("redondeado objeto 3 "+(0).toFixed(2));
console.log("redondeado objeto 3 "+(2.34).toFixed(1));

//al utilizar valores decimales negativos es importante 
//albergarlos dentro de los parentesis para que respete el tipo de dato tambien

console.log("sin parentesis "+ -2.34.toFixed(1))
console.log("con parentesis "+ (-2.34).toFixed(1))

//.toLocaleString() retorna una cadena con el valor representado en lenguaje local

var numero6=3500;
console.log(numero6.toLocaleString());
//arabe
console.log(numero6.toLocaleString('ar-EG'));
//chino decimal
console.log(numero6.toLocaleString('zh-Hans-CN-u-nu-hanidec'))

//toPrecision() devuelve un numero con los decimales deseados pero sin redondear

var numeroPresicion=5.123456;
console.log(numeroPresicion.toPrecision());//5.123456
console.log(numeroPresicion.toPrecision(5)); //5.1235
console.log(numeroPresicion.toPrecision(2)); //5.1
console.log(numeroPresicion.toPrecision(1)); //5
console.log((1234.5).toPrecision(2)); // 1.2e+3 (En ocasiones )


//.toString() devuelve una cadena con el numero en la base (hexadecimal, binaria) que determinemos

console.log((17).toString()); //17
console.log((17.2).toString()); //17.2
console.log((-0xff).toString(2)); // '-11111111'
console.log((254).toString(16)); // 'fe'

//.parseFloat() devuelve un numero decimal o entero partiendo de una cadena

Number.parseFloat("3.14");
console.log(Number.parseFloat("3.14"));
Number.parseFloat("3.14"); // 3.14
Number.parseFloat("314e-2"); // 3.14
Number.parseFloat("0.0314E+2"); // 3.14
Number.parseFloat("3.14textos..."); // 3.14
Number.parseFloat("1textos..."); // 1

//parseInt() devuelbe un numero entero partiendo de una cadena
/* ademas ns permite seleccionar la base numerica sobre la que trabajamos
(binaria con 2, hexadecimal con 16, etc...). por defecto se utiliza la base de 10 (decimal) */

parseInt(" 0xF", 16); // 15
parseInt(" F", 16); // 15
parseInt("17", 8); // 15
parseInt(021, 8); // 15
parseInt("015", 10); // 15
parseInt(15.99, 10); // 15
parseInt("15,123", 10); // 15
parseInt("FXX123", 16); // 15
parseInt("1111", 2); // 15
parseInt("15*3", 10); // 15
parseInt("15e2", 10); // 15
parseInt("15px", 10); // 15
parseInt("12", 13); // 15







