class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.node++;
    }

    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
        this.adjancentList[node2].push(node1);
    }
}

const myGraph=new Graph();
//Primero agregamos los vertices
myGraph.addVertex("1"); // al agregar genera un array dentro
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("8");

myGraph.addEdge("3","5");
myGraph.addEdge("6","3");
myGraph.addEdge("1","6");
myGraph.addEdge("1","3");
myGraph.addEdge("1","4");
myGraph.addEdge("4","5");

