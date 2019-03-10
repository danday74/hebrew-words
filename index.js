const hebrewWords = require('./js/hebrew-words')

const main = (word, stressOnPenultimateSyllable = null) => {
  return hebrewWords(word, stressOnPenultimateSyllable)
}

module.exports = main
