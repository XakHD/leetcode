// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

//My Solution
/**
 * @param {character[][]} grid
 * @return {number}
 */



//Create Helper function for get adjNeighbors
const getAdjNeighbors = (i, j, grid, visited) => {
    const adjNeighbors = [];
 
 //get the 4 neighbors above, below, left and right and push all into adjNeighbors
  if(i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
  if(i < grid.length - 1 && !visited[i + 1][j]) adjNeighbors.push([i + 1, j]);

  if(j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]);
  if(j < grid[0].length - 1 && !visited[i][j + 1]) adjNeighbors.push([i, j + 1]);


 
  return adjNeighbors;

}


// depthFirstSearch Helper function
// good way to remember dFS is to think data science/ going to be a stack which takes in the i
const dFS = (i, j, grid, visited) => {
    const stack = [[i, j]];

    let islandSize = 0;

    while(stack.length) {
        let curNode = stack.pop();

        let [i, j] = curNode;

        //check if visited at i an j;
        if (visited[i][j]) continue;
        visited[i][j] = true;

        //check if cell is an island component
        if(grid[i][j] === '0') continue;
        //if a one increment an island size
        islandSize++;

        let adjNeighbors = getAdjNeighbors(i, j, grid, visited);
        // push all adjacent neighbors into the stack

        stack.push(...adjNeighbors);

    }

    return islandSize > 0 ? true : false;
};




var numIslands = function(grid) {
    const visited = grid.map(row => row.map(cell => false));
    let islandCount = 0;
     
    for( let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++){
            if(dFS(i, j, grid, visited)) islandCount++;
        }
    }

    return islandCount
};
