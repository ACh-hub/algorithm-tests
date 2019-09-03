const vowels = str => {
    const vowelsStr = 'aiueo'
    let count = 0
    for (let char of str.toLowerCase())
        if (vowelsStr.includes(char)) count++

    return count
}
