// const anagrams = (str1, str2) => stripAndSort(str1)==stripAndSort(str2)
// const stripAndSort = str => [...str.replace(/[^\w]/g,'').toLowerCase()].sort().join('')

// Solution with character maps
const anagrams = (str1, str2) => {
    const map1 = createCharacterMap(str1);
    console.log(map1)
    const map2 = createCharacterMap(str2);
    console.log(map2)

    if (Object.keys(map1).length === Object.keys(map2).length) {
        for (let char in map1) {
            if (map1[char] !== map2[char])
            return false
        }
        return true
    } else return false
}

const createCharacterMap = str => {
    characters = {}
    for (char of str.replace(/[^\w]/g, '').toLowerCase()) {
        characters[char] = characters[char] + 1 || 1
    }
    return characters;
}

