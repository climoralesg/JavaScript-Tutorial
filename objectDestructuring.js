//object destructuring

const servicios={
    api: {},
    mailer: 'Soy mailer',
    apollo:{},
    nombre:'Este es un nombre',
}

const enviarCorreo = ({mailer,nombre}) => {
    //redactar codigo de enviar correo
    console.log(mailer)
    console.log(nombre)
}

enviarCorreo(servicios)


const enviarMail = (srs) => {
    const {mailer} = srs
    const {nombre} = srs // es ineficiente porque asiga al objeto 
    //redactar codigo de enviar correo
    console.log(mailer)
    console.log(nombre)
}

enviarMail(servicios)

