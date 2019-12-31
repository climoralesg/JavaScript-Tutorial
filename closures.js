/*combinacion de una funcion y el alcance lexico que tiene esta */
//se crea al ejecutar una funcion
/*
const x='Fluffy'

const f=()=>{
    const y='Kins'
    console.log(x,y);
}

f();
*/

require('isomorphic-fetch')

const crudder = dominio => recurso => {
    const url='${dominio}/${recurso}'
    return ({
        create:() => fetch(url,{
            method:'POST',
            body:JSON.stringify(x),
        }).then (x=>x.json()),
        get:() => fetch(url).then(x=> x.json())
    })
}


const Base=crudder('https://jsonplaceholder.typicode.com')
const Todos=Base('todos')

Todos.get().then(console.log)