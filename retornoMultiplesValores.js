const producto1={nombre:'Zapatillas', precio:900};
const producto2={nombre:'Remera', precio:500};


const funcion=(producto)=>{
    const precioSinDescuento=producto.precio;
    const precioConDescuento=producto.precio*0.85;
    const precioConSuperDescuento=producto.precio*0.7;


    return {precioSinDescuento,precioConDescuento,precioConSuperDescuento};
}


const {precioSinDescuento,precioConDescuento,precioConSuperDescuento}=funcion(producto1);

console.log(precioConSuperDescuento);

const {
    precioSinDescuento:precioSinDescuento2,
    precioConDescuento:precioConDescuento2,
    precioConSuperDescuento:precioConSuperDescuento2
}=funcion(producto2);

console.log(precioConDescuento2);

const funcion2=(producto)=>{
    const precioSinDescuento3=producto.precio;
    const precioConDescuento3=producto.precio*0.85;
    const precioConSuperDescuento3=producto.precio*0.7;


    return [precioSinDescuento3,precioConDescuento3,precioConSuperDescuento3];
}

const [ // se puede poner arreglo [] se transforma en un arreglo 
    precioSinDescuento3,
    precioConDescuento3,
    precioConSuperDescuento3
]=funcion2(producto2);

console.log(precioSinDescuento3);