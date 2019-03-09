const checkForInvalidChars = require('./tasks/check-for-invalid-chars')

const hebrewWords = word => {
  return checkForInvalidChars(word)
}

module.exports = hebrewWords
