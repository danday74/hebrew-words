const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const getConsonants = require('./tasks/get-consonants')

const hebrewWords = word => {
  const obj = {word}

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  getConsonants(obj)
  return obj
}

module.exports = hebrewWords
