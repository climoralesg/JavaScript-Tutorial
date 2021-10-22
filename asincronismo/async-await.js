const algoVaPasar=()=>{
    return new Promise((resolve,reject)=>{
        (true) ? setTimeout(()=>resolve('Algo asincrono'), 3000)
        :reject (new Error('Test error'));
    })
}

const algoVaPasarAsync=async()=>{
    const algo= await algoVaPasar();
    console.log(algo);
    console.log("prueba asincrono");
}

console.log('Before')

algoVaPasarAsync();

console.log('after');

const otraFuncion=async()=>{
    try{
        const algo=await algoVaPasar();
        console.log(algo);
    } catch (error){
        console.log(error);
    }
}

console.log('Before 1')

otraFuncion();

console.log('after 1');