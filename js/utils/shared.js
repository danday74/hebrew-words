const beautifyHtml = require('js-beautify').html
const {find} = require('lodash')
const hebrewChars = require('../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

const replaceCharsWithIds = (word, array) => {
  const chars = word.split('')
  word = chars.map(char => {
    const vowel = find(array, {char})
    return vowel ? vowel.id : char
  }).join('')
  return word
}

const getVowelPattern = encoded => {
  const ids = encoded.split('')
  const vp = ids.map(id => {
    const letter = find(all, {id})
    return letter.type
  }).join('')
  return vp
}

const logPrettyHtml = strHtml => {
  const prettyHtml = beautifyHtml(strHtml, {indent_size: 2, inline: []})
  console.log(prettyHtml)
}

const shared = {
  replaceCharsWithIds,
  getVowelPattern,
  logPrettyHtml
}

module.exports = shared
