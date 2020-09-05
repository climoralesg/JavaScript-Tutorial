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