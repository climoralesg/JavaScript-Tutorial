// object spread operator

const obj={
    a:1,
    b:2,
}

//const nos permite mutar objetos pero no modificar
const obj1={
    data:{
        ...obj,
    }
        

}

obj1['c']=3

console.log(obj,obj1)

