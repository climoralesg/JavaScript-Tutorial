function sum(num1,num2){
    return num1+num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(2,2,sum));

function date(callback){//2. recibe la funcion como nombre callback

    console.log("primero",new Date);
    setTimeout(function(){
        let date=new Date;
        callback(date); //3. Llama esa funcion con un dato
    }, 3000)
}


function printDate(dateNow){ //4. Ejecuta esa funcion
    console.log(dateNow)
}

date(printDate); //1.llama a la funcion y envia una funcion que se ejecutara posteriormente