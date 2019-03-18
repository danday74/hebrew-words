const replaceShinSinDots = require('./replace-shin-sin-dots')
const replaceDagesh = require('./replace-dagesh')

const halfEncodeWord = word => {
  word = replaceShinSinDots(word)
  word = replaceDagesh(word)
  return word
}

module.exports = halfEncodeWord
