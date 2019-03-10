const replaceShinSinDots = require('./replace-shin-sin-dots')
const replaceDagesh = require('./replace-dagesh')
const replaceComplexVowels = require('./replace-complex-vowels')
const replaceTheRest = require('./replace-the-rest')

const getWordId = obj => {
  let word
  word = obj.word
  word = replaceShinSinDots(word)
  word = replaceDagesh(word)
  word = replaceComplexVowels(word)
  word = replaceTheRest(word)
  return word
}

module.exports = getWordId
