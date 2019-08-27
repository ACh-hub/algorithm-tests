// Return true if the given string is a palindrome. Otherwise, return false

// Solution with revese
const palindrome = givenString => givenString===[...givenString].reverse().join('');

// Solution with every - suboptimal because we dont nrrd to check all the elements
//const palindrome = givenString => [...givenString].every((character, index) => character===givenString[givenString.length-index-1])