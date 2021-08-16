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

    // My recursive DFS solution
    depthFirstSearchRecursive(startingNode){
        let resultsArr = []
        let visitedVerts = {}

        const traverseGraph = (vertex) => {
            if(this.adjacencyList[vertex].length < 1) return;

            if(!visitedVerts[vertex]){ 
                visitedVerts[vertex] = true;
                resultsArr.push(vertex)
            }
            for(let i = 0; i < this.adjacencyList[vertex].length; i++){
                if (!visitedVerts[this.adjacencyList[vertex][i]]){
                    traverseGraph(this.adjacencyList[vertex][i])
                }
            }
        }
        traverseGraph(startingNode);
        return resultsArr;
    }

    // Colt's recursive DFS solution
    // depthFirstSearchRecursive(start){
    //     const result = [];
    //     const visited = {};
    //     const adjacencyList = this.adjacencyList;

    //     (function dfs(vertex) {
    //         if(!vertex) return null;
    //         visited[vertex] = true;
    //         result.push(vertex);
    //         adjacencyList[vertex].forEach(neighbor => {
    //             if(!visited[neighbor]){
    //                 return dfs(neighbor);
    //             }
    //         })
    //     })(start);

    //     return result;
    // }

    // My iterative DFS solution
    depthFirstSearchIterative(startingNode){
        const resultsArr = [];
        const checkStack = [startingNode];
        const visitedVertices = {};

        while(checkStack.length){
            let vertex = checkStack.pop()
            if(!visitedVertices[vertex]){
                visitedVertices[vertex] = true;
                resultsArr.push(vertex);

                this.adjacencyList[vertex].forEach(neighbor => {
                    if(!visitedVertices[neighbor]) checkStack.push(neighbor);
                })
            }
        }
        return resultsArr;
    }

    //Colt's iterative DFS solution
    // depthFirstSearchIterative(start){
    //     const stack = [start];
    //     const result = [];
    //     const visited = {};
    //     let currentVertex;

    //     visited[start] = true;
    //     while(stack.length){
    //         currentVertex = stack.pop();
    //         result.push(currentVertex);

    //         this.adjacencyList[currentVertex].forEach(neighbor => {
    //             if(!visited[neighbor]){
    //                 visited[neighbor] = true;
    //                 stack.push(neighbor);
    //             }
    //         });
    //     }
    //     return result;
    // }

    // My BFS solution
    breadthFirstSearch(startingNode){
        const queue = [startingNode];
        const result = [];
        const visitedVertices = {}
        let vertex;

        while(queue.length){
            vertex = queue.shift()
            if(!visitedVertices[vertex]){
                visitedVertices[vertex] = true;
                result.push(vertex)
            
                this.adjacencyList[vertex].forEach(neighbor => {
                    if(!visitedVertices[neighbor]) queue.push(neighbor)
                })
            }
        }
        return result;
    }

    // Colt's BFS solution
    // breadthFirstSearch(start){
    //     const queue = [start];
    //     const result = [];
    //     const visited = {};
    //     let currentVertex;
    //     visited[start] = true

    //     while(queue.length){
    //         currentVertex = queue.shift();
    //         result.push(currentVertex);

    //         this.adjacencyList[currentVertex].forEach(neighbor => {
    //             if(!visited[neighbor]){
    //                 visited[neighbor] = true;
    //                 queue.push(neighbor)
    //             }
    //         })
    //     }
    //     return result;
    // }

}

let graph = new Graph()

// graph.addVertex("Tokyo")
// graph.addVertex("Sapporo")
// graph.addVertex("Kyoto")
// graph.addVertex("Osaka")
// graph.addVertex("Hakodate")

// graph.addEdge("Tokyo", "Kyoto")
// graph.addEdge("Tokyo", "Osaka")
// graph.addEdge("Kyoto", "Osaka")
// graph.addEdge("Sapporo", "Hakodate")
// graph.addEdge("Tokyo", "Sapporo")
// graph.addEdge("Tokyo", "Hakodate")
// graph.addEdge("Osaka", "Sapporo")

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

// console.log(graph.adjacencyList)

// graph.removeEdge("Osaka", "Sapporo")
// debugger
console.log(graph.breadthFirstSearch("A"))
// console.log(graph.adjacencyList)