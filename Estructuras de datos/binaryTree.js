/*
            10
    4               20
2       8       17      170


*/



class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) { // si es menor se va a l lado izquierdo
                    if(!currentNode.left){
                        currentNode.left=newNode();
                        return this;
                    }
                    currentNode=currentNode.left;
                }else{
                    if(!currentNode.right){
                        currentNode.right=newNode();
                        return this;
                    }
                    currentNode=currentNode.right;
                }
            }
        }
    }
//tarea hacer el search

}