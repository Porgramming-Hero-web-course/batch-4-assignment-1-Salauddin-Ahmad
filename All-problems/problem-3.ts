/****
 *  Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence case-insensitively.
 *
 */

/****
 * // Sample Input:
 * countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
 *
 * // Sample Output: 2;
 *
 */

// --------------------------------------------------------
// ----------------Problem-3 Solution----------------------
// --------------------------------------------------------

function countWordOccurrences(sentence: string, word: string): number {
  //splits and lowercase sentemces from the first parameter  also removes all the alphanum characters
  const lowCaseSentence = sentence.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
  // converts second param to lowercase
  const lowCaseword = word.toLowerCase();

  // checks how many lowercase words is available in the first parameter and returns the length
   const occurence = lowCaseSentence.filter((w) => w === lowCaseword).length;
   return occurence
}
console.log(
  countWordOccurrences("TypeScript! is great. I love TypeScript!", "typescript")
);


