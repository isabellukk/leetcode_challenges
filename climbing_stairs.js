//------- Climbing Stairs -------//
// https://leetcode.com/problems/climbing-stairs/

//----------------NOTES----------------//
/*
1. To start, we need to write out a few base cases. When n is 0, 1, and 2, the number of ways to climb the stairs 0, 1, and 2 (in that order) -- so if n is one of those numbers, we can just return n.

          if (n < 3) return n;

2. We need to initialize two constants, one called first and one called second. We'll start by setting first equal to 1, and second equal to 2.

          let first = 1;
          let second = 2;


3. Now, starting at the number 2, and going until we reach n, we can have a for loop incrementing one number at a time.

    Inside the for loop, we'll initiate a new variable called current which will store the sum of first and second.

    Then, we can move first  to equal second, and second to equal current.

      for (let i = 2; i < n; i++) {
          const current = first + second;
          first = second;
          second = current;

*/

const climbStairs = (n) => {
  if (n < 3) 
    return n;
  let first = 1;
  let second = 2;
  for (let i = 2; i < n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
}

console.log(climbStairs(7));
