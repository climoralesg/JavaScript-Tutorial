//const y let vienen a reemplazar a var


console.log(variable);
var variable=0;
//para que no pase lo de var se usa let
 
//let variable=0;
console.log("1 "+y);
var y = 'var';
console.log("2 "+y);

//const no se le puede reasignar un valor a diferencia de let que lo puedo hacer cuando quiera
const dato=0;


//console.log("hola mundo");
function letTest() {
    let x = 31;
    let y=40;

    const fn3=(x,y)=>{
        console.log("x en arrow "+x);
        console.log("y en arrow "+y);
        
    }

    const variable=fn3(x,y);

    if (true) {
        //console.log("let test 1 "+x);  // 71
        let x = 71;  // variable diferente
        console.log("let test 2 "+x);  // 71
    }
    console.log("let test 3 "+x);  // 31
  }
  
 letTest();


 