const replaceShinSinDots = require('./replace-shin-sin-dots')
const replaceDagesh = require('./replace-dagesh')
const utils = require('../../utils')

const getSyllables = obj => {

  let word
  word = obj.word

  const wordBefore = word

  word = replaceShinSinDots(word)
  word = replaceDagesh(word)

  const wordAfter = word

  utils.debugWord(wordBefore, 'before')
  utils.debugWord(wordAfter, 'after')

  return word
}

module.exports = getSyllables
