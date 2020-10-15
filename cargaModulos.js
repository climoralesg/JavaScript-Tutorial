module.exports="Claudio morales";

let count=0;
const incrementar=()=>count++; // esto es como un return
const decrementar=()=>count--;

const obtenerContador=()=>count;

module.exports={
    incrementar,
    decrementar,
    obtenerContador
}