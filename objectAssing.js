const perfil = {
    nombre: 'Gerardo',
    info: {
        direccion: 'mackay'
    }
}

const region = {
    pais: 'Mexico',
    info: {
        coordenadas: '1234'
    }
}

const social = {
    twitter: '@gerar'
}

const resultado = Object.assign({}, perfil, region, social);

console.log(resultado);


resultado.info = Object.assign({},
    perfil.info,
    region.info
)

console.log(resultado)

const resultado2 = Object.assign({},
    perfil,
    region,
    social,
    {
        info: Object.assign(
            {},
            perfil.info,
            region.info
        )
    })

console.log(resultado2);