const fetch = require("node-fetch");
const url="https://rickandmortyapi.com/api/character/";

const funcion=async()=>{
    const response=await fetch(url);
    const blob=await response.blob();
    const responseUrl=URL.createObjectURL(blob)
    console.log("blob: ",blob);
    console.log("responseUrl: ",responseUrl);
}


funcion().then({

})
