class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];

        // for(let i = 0; i < this.adjacencyList[vertex].length; i++){
        //     this.removeEdge(this.adjacencyList[vertex], this.adjacencyList[vertex[i]])
        // }
        // delete this.adjacencyList[vertex];
    }

    addEdge(vert1, vert2){
        this.adjacencyList[vert1].push(vert2)
        this.adjacencyList[vert2].push(vert1)
    }

    removeEdge(vert1, vert2){
        this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(vert => vert !== vert2) 
        this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(vert => vert !== vert1) 
    }
}

let graph = new Graph()

graph.addVertex("Tokyo")
graph.addVertex("Sapporo")
graph.addVertex("Kyoto")
graph.addVertex("Osaka")
graph.addVertex("Hakodate")

graph.addEdge("Tokyo", "Kyoto")
graph.addEdge("Tokyo", "Osaka")
graph.addEdge("Kyoto", "Osaka")
graph.addEdge("Sapporo", "Hakodate")
graph.addEdge("Tokyo", "Sapporo")
graph.addEdge("Tokyo", "Hakodate")
graph.addEdge("Osaka", "Sapporo")

console.log(graph.adjacencyList)

graph.removeEdge("Osaka", "Sapporo")

console.log(graph.adjacencyList)