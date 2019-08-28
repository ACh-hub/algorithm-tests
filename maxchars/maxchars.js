// Given a string, return the character that is most
// commonly used in the string.

const maxChar = givenString => {
    const characters = {};
    let max = givenString[0];
    for (let c of givenString) {
        characters[c] = characters[c] + 1 || 1
        if (characters[c] > characters[max])
            max = c;
    }
    return max
}