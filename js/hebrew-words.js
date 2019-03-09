const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const getSyllables = require('./tasks/get-syllables')

const hebrewWords = word => {
  const obj = {word}
  checkForInvalidChars(obj)
  if (!obj.ok) return obj
  getSyllables(obj)
  return obj
}

module.exports = hebrewWords
