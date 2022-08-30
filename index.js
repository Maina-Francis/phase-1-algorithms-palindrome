const { stringify } = require("mocha/lib/utils");

function isPalindrome(word) {
  //splitting the word, reversing it then joining it back together
  const palindromeWord = word.split("");
  const reversedPalindrome = palindromeWord.reverse();
  const reversedString = reversedPalindrome.join("");

  //Checking if the reversedString is the same as the word passed into the function

  if (word === reversedString) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
// checking if the word is a string
// split, reverse, then join the string back to form a word
// check if the reversed string is the same as the initial word

/*
  Add written explanation of your solution here
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
