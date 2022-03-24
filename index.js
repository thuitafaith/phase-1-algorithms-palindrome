function isPalindrome(word) {
  // Write your algorithm here
  const wordToArray = word.split('')

  const reverseArray = wordToArray.reverse();

  const reverseWord = reverseArray.join('');

  if (word === reverseWord){
    return true
  } 
  else {
    return false

  }


}

/* 
  Add your pseudocode here
  convert the word to an array
  reverse the array values
  convert array to word
  if word equals the reversed array values
    return true
    else 
      return false
*/

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
