let usuarios = [
    {
        id: 1,
        nombre: 'Claudio'
    },
    {
        id: 2,
        nombre: 'Lina'
    }
];

let telefonos = [
    {
        id: 1,
        telefono: 92632843
    },
    {
        id: 2,
        telefono: 41530850
    }
]


const obtenerUsuario = id => {
    return new Promise ((resolve,reject)=>{
        if(usuarios.find(usuario=>usuario.id===id)){
            console.log('El usuario existe');
            resolve(obtenerTelefono(id));
        }else{
            reject('El usuario no existe');
        }
    })
}

const obtenerTelefono= id =>{
    return new Promise ((resolve,reject)=>{
        if(usuarios.find(telefono=>telefono.id===id)){
            resolve('El Telefono existe');
        }else{
            reject('El Telefono no existe');
        }
    });
}

obtenerUsuario(1).then(res=>{
    return res;
}).then(mensaje=>{
    console.log(mensaje);
})
.catch(error=>{
    console.error(error);
})