// ------- Number of Islands -------
// https://leetcode.com/problems/number-of-islands/

// Notes on problem below
/*
Depth First Search (DFS)
- traverses the graph and explores each adjacent node before backtracking and moving to the next node
- recursive algorithm

Perfect for doing what we need. We need to find all instances of connected 1's.

Once we find the 1, we will check the top bottom left and right. If there is a 1, we convert it to 0. If there are no more 1's, we will break out of the recursive function and go back to the loop.


Video that helped
https://www.youtube.com/watch?v=r260LwU67Uo

 */

grid = [
  [
    "1", "1", "1", "1", "0"
  ],
  [
    "1", "1", "0", "1", "0"
  ],
  [
    "1", "1", "0", "0", "0"
  ],
  [
    "0", "0", "0", "0", "0"
  ]
]

const numIslands = (grid) => {
  let countIslands = 0;
  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === '1') {
        countIslands++;
        destroy(parseInt(rowIndex), parseInt(colIndex), grid)
      }
    }
  }
  return countIslands;
}

const destroy = (rowIn, colIn, grid) => {
  if (grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === 'O') 
    return;
  grid[rowIn][colIn] = 'O';
  destroy(rowIn + 1, colIn, grid);
  destroy(rowIn - 1, colIn, grid);
  destroy(rowIn, colIn + 1, grid);
  destroy(rowIn, colIn - 1, grid);

}

console.log(numIslands(grid));
