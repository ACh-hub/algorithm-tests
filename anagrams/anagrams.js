const anagrams = (str1, str2) => {
    str1 = [...str1.replace(/[^\w]/g,'').toLowerCase()].sort().join('');
    str2 = [...str2.replace(/[^\w]/g,'').toLowerCase()].sort().join('');
    return str1==str2;
}
