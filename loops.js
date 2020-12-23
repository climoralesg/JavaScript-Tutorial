const anotherFuncion = () => {
    for (var i = 0; i < 10; i++) { //Al ser var se genera el closure 
        setTimeout(() => {
            console.log(i);

        }, 1000);
    }
};

anotherFuncion();