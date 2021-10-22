/*
Spread Array
Definido como (...) nos permite llamar de forma simple todo un array (contenido)
Tambien puede ser ocupado en objetos.
*/ 

const frutasVerdes=[
    'kiwi',
    'uva',
    'limon'
];

const frutasRojas=[
    'manzana',
    'fresa',
    'sandia'
];


frutasVerdes.push('pera');
const frutas=frutasVerdes.concat(frutasRojas);
console.log(frutas);

const frutasTotales=[
    1,
    2,
    ...frutasVerdes,
    'frutilla',
    ...frutasRojas
]
console.log(frutasTotales)