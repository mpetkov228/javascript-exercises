const palindromes = function (str) {
    const punctuation = ',!./\\][? ';

    const strArray = str.toLowerCase()
                        .split('')
                        .filter(s => punctuation.includes(s) == false);

    const reversedArray  = strArray.slice().reverse();
    
    return strArray.join('') == reversedArray.join('');
};

// Do not edit below this line
module.exports = palindromes;