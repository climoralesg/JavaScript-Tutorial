//recursividad es una funcion que se llama a si misma

/*
const conteoRegrsivo=(a)=>{
    if(a<0) return
    console.log(a)
    return conteoRegrsivo(a-1)
}

conteoRegrsivo(10) 
*/

const axios=require('axios') //libreria para hacer llamados http
/*
const llamarApi=async(url,llamados=0)=>{
    try{
        const result=await axios.get(url)
        console.log(result);
        return result
    }catch(e){
        if(llamados>5){
            return ''
        }
        console.log(e);
        return llamarApi(url,llamados+1);
    }
}
*/

const llamarApi=async(url,llamados=0)=>{
    try{
        const {data}=await axios.get(url)
        console.log(data);
        return data
    }catch(e){
        if(llamados>5){
            return ''
        }
        console.log(e);
        return llamarApi(url,llamados+1);
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users')