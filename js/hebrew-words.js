const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const getConsonants = require('./tasks/get-consonants')
const doubleStrongDagesh = require('./tasks/double-strong-dagesh')

const hebrewWords = word => {
  const obj = {word}

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  getConsonants(obj)

  doubleStrongDagesh(obj)
  return obj
}

module.exports = hebrewWords
