/* Funcion asincrona Promesas nos dira como indica su nombre si una promesa se cumple */

let x=10;

console.log("Ejecutando el proceso 1 ");

const promesa= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x=5;
        if(x==5){
            resolve("Es 5, Proceso 2 terminado");
        }else{
            reject('El valor no es 5, Proceso terminado')
        }
        
    },2000);
})

promesa.then(res=>{
    console.log("Terminado" , res);
    console.log("Proceso 3 terminado");
}).catch(error=>{
    console.log("Terminado" , error)
    console.log("Proceso 3 terminado");
})