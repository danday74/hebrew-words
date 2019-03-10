const {find} = require('lodash')

const replaceCharsWithIds = (word, array) => {
  const chars = word.split('')
  word = chars.map(char => {
    const vowel = find(array, {char})
    return vowel ? vowel.id : char
  }).join('')
  return word
}

const strReplaceAtPos = (str, idx, char) => {
  str = str.split('')
  str[idx] = char
  str = str.join('')
  return str
}

const utils = {
  replaceCharsWithIds,
  strReplaceAtPos
}

module.exports = utils
