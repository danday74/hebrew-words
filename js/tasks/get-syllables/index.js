const replaceShinSinDots = require('./replace-shin-sin-dots')
const replaceDagesh = require('./replace-dagesh')

const getSyllables = obj => {
  let word
  word = obj.word
  word = replaceShinSinDots(word)
  word = replaceDagesh(word)
  return word
}

module.exports = getSyllables
