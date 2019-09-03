const capitalize = str => str.split(" ").map(capitalizeWord).join(' ')
const capitalizeWord = word => word.charAt(0).toUpperCase()+ word.slice(1)

capitalize('ala ma kota')