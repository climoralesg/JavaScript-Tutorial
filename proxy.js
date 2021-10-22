/*Nos regres un objeto interceptado
Crear un objeto basado en uno original y el objeto representa lo que es la proxy 
y es capaz de recibir cualquier operacion y enviarsela al original 
y en medio de la vinculacion se puede hacer un handler que registra los cambios y administra
Si no quiere algun cambio lo puedes descartar.

Registra los cambios en el objeto original
*/

let empleado={
    nombre:'',
    apellido:'',
    password:'hola123'
}
function valida(prop,value){
    const keys=Object.keys(empleado);
    const propInvalida=keys.indexOf(prop)===-1;
    if(propInvalida){
        console.log('Propiedad invalida');
        return false;    
    }
    if((prop==='apellido' || prop==='nombre') && /\d/.test(value) ){
        console.error(`El valor de la propiedad ${prop} es invalido `);
        return false;
    }
    return true;
}

let handler={
    set(obj,prop,value){
        if(valida(prop,value)){
            obj[prop]=value;
        }
        
    }
};
let pEmpleado=new Proxy(empleado,handler);

pEmpleado.nombre='alejandro';
pEmpleado.id=321321321;
console.log(empleado);