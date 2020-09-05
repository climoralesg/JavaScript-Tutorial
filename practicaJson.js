var json=require("./ejemploJson.json");
var fs=require("fs");
const util = require('util') //sirve para ver objetos completamente

//console.log(util.inspect(json, {showHidden: false, depth: null}))
console.log(util.inspect(json, false, null, true /* enable colors */))
//console.log(json);
//console.log("regiones "+json[0].region);

//Metodo alternativo de lectura

/*
let filePath="./ejemploJson.json"
fs.readFile(filePath, 'utf-8', function (err, fileContents) {
    if (err) throw err;
    
    console.log(JSON.parse(fileContents));
});
*/



const provincia=json[1].provincias[1].comunas[0].name;
const comuna=json[1]['provincias'][1]['comunas'][0];
//console.log(provincia);
//console.log(comuna);

const JsonToString = JSON.stringify(json);
//console.log(JsonToString);

//const parseado=JSON.parse(json); //parsea un string a json
//console.log(parseado);


/*Hola a todos, espero que esten excelente, tengo una consulta,
 estoy haciendoun servicio Api y la informacion la tengo en un
 archivo Json,
 que seria mejor, pasar esos datos a una bd y hacer consultas? o 
mantener esos datos en el Json y hacer las consuta ahi por filtro? */

"C:\Users\Claudio\Desktop\JavaScript\ejemploJson.json"