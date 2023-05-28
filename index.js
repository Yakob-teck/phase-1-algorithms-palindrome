function isPalindrome(word) {
  // Write your algorithm here
  const newWord= word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedWord = newWord.split('').reverse().join('');
return newWord===reversedWord;
}
/* 
  Add your pseudocode here
  function isPalindrome(word):
   newWord = removeNonAlphanumericCharacters(word)
    reversedWord = reverse(newWord)
    
    if newWord equals reversedWord:
        return true
    else:
        return false

*/

/*
  Add written explanation of your solution here
1. removeNonAlphanumericCharacters(word) is a helper function that takes a word as input and removes any non-alphanumeric characters from it.
2. reverse(cleanWord) :- This function reverses the order of characters in the word.

3. The new word is compared with the reversed word using the equality operator . 
4. If the new word and the reversed word are equal, it means the word is a palindrome and the function returns true. Otherwise, it returns false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
