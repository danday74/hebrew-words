const replaceShinSinDots = require('./replace-shin-sin-dots')

const getSyllables = obj => {
  let word
  word = obj.word
  word = replaceShinSinDots(word)
}

module.exports = getSyllables
