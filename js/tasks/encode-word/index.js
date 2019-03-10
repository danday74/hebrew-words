const replaceShinSinDots = require('./replace-shin-sin-dots')
const replaceDagesh = require('./replace-dagesh')
const replaceComplexVowels = require('./replace-complex-vowels')
const replaceTheRest = require('./replace-the-rest')

const encodeWord = word => {
  word = replaceShinSinDots(word)
  word = replaceDagesh(word)
  word = replaceComplexVowels(word)
  word = replaceTheRest(word)
  return word
}

module.exports = encodeWord
