
// Simple solution treating number as a string
const reverseInt = givenInt => parseInt([...Math.abs(givenInt).toString()].reverse().join(''), 10) * Math.sign(givenInt)

