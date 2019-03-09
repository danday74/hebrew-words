const checkForInvalidChars = require('./tasks/check-for-invalid-chars')

const hebrewWords = word => {
  const obj = {word}

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  return obj
}

module.exports = hebrewWords
