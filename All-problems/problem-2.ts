
/***
 * Problem 2:
 * Create a TypeScript function removeDuplicates that accepts 
 * an array of numbers and returns a new array with duplicates * * removed. Preserve the original order of elements.
 */

/***
 * Sample Input:
 * removeDuplicates([1, 2, 2, 3, 4, 4, 5])
 * Sample Output:
 * [1, 2, 3, 4, 5]
 */

// --------------------------------------------------------
// ----------------Problem-2 Solution----------------------
// --------------------------------------------------------

function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}

// returns all the unique items in the array or reomoves the duplicates

removeDuplicates([1, 2, 2, 3, 4, 4, 5])


