
/*
stack o pila es una estructura de tipo LIFO (last in first out)
peek(): te permite ver el ultimo dato ingresado
pop(): funcion que significa quitar el ultimo ingresado
push(): funcion asociada al ingreso de datos en el stack
*/

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    peek(){
        if(this.length==0){
            return "No hay mas elementos en la pila";
        }else{
            return this.top;
        }
    }

    pop(){
        if(this.length==0){
            return "No hay mas elementos para quitar";
        }else{
            this.top=this.top.next;
            this.length--;
            return this;
        }
    }

    push(value){
        //Crea el nodo y verifica que la longitud del stack sea 0
        const nodo=new Node(value);
        
        //Si es 0
        if (this.length==0){
            //asigna el mismo nodo como top y bottom
            this.bottom=nodo;
            this.top=nodo;
        }else{
            //Si no, el top lo guarda en un auxiliar
            const holdingPointer=this.top;
            //asigna el nodo al top
            this.top=nodo;
            //los siguientes nodos los pone como siguientes
            this.top.next=holdingPointer;
            
        }
        this.length++;
        return this;
        
    }
}

const stack= new Stack();
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.push(6));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());

