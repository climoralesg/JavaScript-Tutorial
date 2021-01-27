// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedLis = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        // creamos el inicio de nuestro SinglyLinkedList
        this.head = {
            value,
            next: null,
        };

        // Aqui sucede la magia
        // Todo lo que modifiquemos en los atributos de tail
        // se modificará en la estructura inicial
        // por la RERENCIA!
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        // aquí estamos creando un nuevo nodo
        const newNode = new Node(value);

        // Como mencionamos anteriormente
        // si modificamos la cola por la REFERENCIA
        // se modificará la estructura inicial! 🖊
        this.tail.next = newNode;
        // Pero aun tail sigue apuntando a la CABEZA
        // de la estructura inicial entonces es momento
        // de apuntar al nuevo nodo creado para que posteriormente
        // podamos agregar más nodos! 🚀
        this.tail = newNode;
        // Finalmente aumentamos el tamaño definido de
        // nuestra estructura 👨‍🔧
        this.length++;

        return this;
    }

    lookup(value) {
        let nodo = this.head;
        let length = 1;
        while (nodo != null) {
            if (value == nodo.value) {
                console.log("Valor de node", nodo);
                console.log("Se encuentra en la posicion ", length - 1);
                break;
            }
            length++;
            nodo = nodo.next;
        }
    }

    mostrarLista = () => {
        let nodo = this.head;
        console.log("mostrar la lista");
        while (nodo != null) {
            console.log(nodo.value, " ->");
            nodo = nodo.next;
        }
    }

    getTheIndex = (index) => { // busca el nodo del index y devuelve ese nodo
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    getIndexAnterior = (index) => {
        let counter = 0;
        let currentNode = this.head;

        while (counter < index) {
            if (counter == (index - 2)) {
                return currentNode;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }


    insert = (index, value) => {

        let nodo = this.head;
        if (index >= this.length) { // si el index es mayor a nuestra lista
            return this.append(value); // lo inserta al final
        }

        const newNode = new Node(value); // se crea un nuevo nodo con el valor

        const firstPointer = this.getTheIndex(index - 1); // obtiene el nodo del index

        const holdingPointer = firstPointer.next;  // asigna los siguirntes 
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
    }

    delete = (index) => {

        const firstPointer = this.getTheIndex(index - 2);
        const nextPointer = this.getTheIndex(index);

        firstPointer.next = nextPointer;

    }
}


let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(3)
myLinkedList.append(2)
myLinkedList.append(4)
myLinkedList.append(5)
//myLinkedList.mostrarLista();

//myLinkedList.lookup(2);
//console.log(myLinkedList.insert(4,3)); // despues de la posicion 4 (en realidad es la 3 ya que parte desde 0)


myLinkedList.mostrarLista();

myLinkedList.delete(3);

myLinkedList.mostrarLista();

//console.log("Nodo Consultado", myLinkedList.getIndexAnterior(3));