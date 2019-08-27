// Given a string, return a new string with the reversed order of characters

function reverseString(givenString) {
    // Simplest solution with reverse()
    // return givenString.split('').reverse().join('');

    // Simple for... of... solution (a little bit tricky one)
    // let newString = '';
    // for(let character of givenString){
    //     newString = character + newString;
    // }
    // return newString;

    // Reduce solution
    return [...givenString].reduce((newString, current) => current + newString
    , '');

    // for loop solution no array used (ugly solution)
    // let newString = '';
    // for(let it=givenString.length-1; it>=0; it--){
    //     newString+=givenString[it];
    // }
    // return newString;
}