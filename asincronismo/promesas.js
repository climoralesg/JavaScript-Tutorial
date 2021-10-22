const algoVaPasar = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        }
        const error = new Error('Whoop')
        reject(error);
    });
}

algoVaPasar()
    .then(response => console.log(response))
    .catch(err => console.error(err));



const algoVaPasar2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(()=>{
                resolve(true);
            },2000)
        }else{
            const error = new Error('Whoop')
            reject('error');
        }
    });
}

algoVaPasar2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    
Promise.all([algoVaPasar(),algoVaPasar2()])
.then(response=>{
    console.log('Array of results',response);
})
.catch(err=>{
    console.error(err);
})