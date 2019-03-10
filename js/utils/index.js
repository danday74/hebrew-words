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

// const debugWord = (word, msg = null) => {
//   /* istanbul ignore else */
//   if (msg) console.log(msg)
//   word = word.split('')
//   word.forEach((char, i) => {
//     console.log(i, char)
//   })
// }

const utils = {
  replaceCharsWithIds,
  strReplaceAtPos
  // debugWord
}

module.exports = utils
