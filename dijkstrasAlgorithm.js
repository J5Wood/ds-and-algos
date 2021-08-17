class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vert1, vert2, weight){
        this.adjacencyList[vert1].push({node: vert2, weight});
        this.adjacencyList[vert2].push({node: vert1, weight});
    }

    // removeEdge(vert1,vert2){
    //     this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(vert => vert.node !== vert2);
    //     this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(vert => vert.node !== vert1); 
    // }

    // removeVertex(vertex){
    //     while(this.adjacencyList[vertex].length){
    //         const adjacentVertex = this.adjacencyList[vertex].pop()
    //         this.removeEdge(vertex, adjacentVertex);
    //     }
    //     delete this.adjacencyList[vertex];
    // }

    // depthFirstSearchRecursive(start){
    //     const result = [];
    //     const visited = {};

    //     const dfs = (vertex) => {
    //         if(!vertex) return null;
    //         visited[vertex] = true;
    //         result.push(vertex);

    //         this.adjacencyList[vertex].forEach(neighbor => {
    //             if(!visited[neighbor]){
    //                 return dfs(neighbor);
    //             }
    //         })
    //     }

    //     dfs(start)
    //     return result;
    // }

}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort
    }
    dequeue(){
        return this.valueslues.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

let g = new WeightedGraph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")

g.addEdge("A","B", 9)
g.addEdge("A","C", 5)
g.addEdge("B","C", 7)
console.log(g.removeEdge("A", "B"))
console.log(g.adjacencyList)
