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



// Function should accept a starting and ending vertex
    dijkstrasAlgo(start, end){
        //Create an object(we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
        // Create another object called previous and set each key to be each vertex in the adjacency list with a value of null
        //After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue except the starting vertex, which should have a prioity of 0 because that's where we begin.

        const distances = {};
        const previous = {};
        const nodes = new PriorityQueue();
        for(let vert in this.adjacencyList){
            vert !== start ? distances[vert] = Infinity : distances[vert] = 0;
            previous[vert] = null;
            nodes.enqueue(vert, distances[vert])
        };
        // start looping as long as there is anything in the priority queue
        
        while(nodes.values.length){

            //dequeue a vertex from the priority queue
            // if that vertex is the same as the ending vertex, we are done!
            // Otherwise loop through each value in the adjacency list at that vertex

            let currentVert = nodes.dequeue().val;
            if(currentVert === end) break;
     

            this.adjacencyList[currentVert].forEach(edge => {
                //calculate the distance to that vertex from the starting vertex
                // if the distance is less that what is currently storedd in our distances object

                // update the distances object with new lower distance
                // update the previous object to contain that vertex
                // enqueue the vertex with the total distance from the start node
                let length = edge.weight + distances[currentVert];
                if(length < distances[edge.node]){
                    distances[edge.node] = length;
                    previous[edge.node] = currentVert
                    nodes.enqueue(edge.node, length)
                }
            })
        }

        let path = end
        let shortestPath = [];

        while(path){
            shortestPath.push(path)
            path = previous[path]
        }
        return shortestPath.reverse();
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
        this.sort()
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

let g = new WeightedGraph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B", 4)
g.addEdge("A","C", 2)
g.addEdge("B","E", 3)
g.addEdge("C","D", 2)
g.addEdge("C","F", 4)
g.addEdge("D","E", 3)
g.addEdge("D","F", 1)
g.addEdge("F","E", 1)


console.log(g.dijkstrasAlgo("B","D"))
