const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')

const replaceShinSinDots = word => {
  const shin = find(hebrewChars.consonants, {name: 'shin'})
  const shinRegex = new RegExp(shin.char, 'g')
  const sin = find(hebrewChars.consonants, {name: 'sin'})
  const sinRegex = new RegExp(sin.char, 'g')
  word = word.replace(shinRegex, shin.id)
  word = word.replace(sinRegex, sin.id)
  return word
}

module.exports = replaceShinSinDots
