function factorial(n){
    if(n<=1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

console.log("el factorial de 5 es ",factorial(5));