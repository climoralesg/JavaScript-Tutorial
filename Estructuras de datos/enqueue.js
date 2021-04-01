/*
FIFO

enqueue: agrega un elemento al final de la linea
dequeue: remueve el primer elemento de la linea
peek:  toma el primer elemento de la linea (no lo borra)

*/

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }

//agrega un elemento al final de la linea
    enqueue(value){
        const newNode= new Node (value);
        if (this.length==0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        this.length++;
        return this;
    }
//toma el primer elemento de la linea
    peek(){
        return this.first;
    }
//remover al primer elemento de la linea
    dequeue(){
        this.first=this.first.next;
        this.length--;
    }
}


const myQueue=new Queue;

console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue);
/*
console.log(myQueue.peek());
console.log(myQueue.first);
*/


