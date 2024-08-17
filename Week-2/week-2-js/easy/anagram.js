/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const splitVersion = str1.toLowerCase().split("");
  splitVersion.sort();
  const joined = splitVersion.join("");
  const splitVersion2 = str2.toLowerCase().split("");
  splitVersion2.sort();
  const joined2 = splitVersion2.join("");

  if (joined == joined2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
