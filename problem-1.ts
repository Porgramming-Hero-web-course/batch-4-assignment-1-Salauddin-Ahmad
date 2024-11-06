// problem 1

/***
 *  Sample Input:
      sumArray([1, 2, 3, 4, 5]); //Output:15;
 */


// ----------------------------------------------------------------
// --------------------------Problem 1 solution-------------------------
// ----------------------------------------------------------------


function sumArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

sumArray([1, 2, 3, 4, 5]);