//var saveName="";
const person=()=>{
    var saveName="Nombre"
    return {
        getName: () => {
            return saveName;
        },
        setName:(name) => {
            saveName=name;
        },
    };
}

const ejecucionFunction = person();
console.log(ejecucionFunction.getName());

ejecucionFunction.setName("Cambio Nombre");
console.log(ejecucionFunction.getName());
console.log(saveName);
