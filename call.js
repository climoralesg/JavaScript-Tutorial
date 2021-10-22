/*Call nos permite utilizar una funcion con el contexto de  un objeto */

function saludar(){
    console.log(`Hola. Soy ${this.name} ${this.apellido}`);

}

const claudio={
    name:'Claudio',
    apellido: 'Morales',
}

saludar.call(claudio);

/*Apply es lo mismo que call pero saludar a diferencia utiliza arrays para realizar las llamadas a las variables */
const valores=[800,'noreste'];
saludar.apply(claudio, valores);

//Metodo bind() crea una nueva funcion con un metodo asignado, luego se le pueden asignar mas valores.

this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81