const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const encodeWord = require('./tasks/encode-word')

const hebrewWords = word => {

  const obj = {word}

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  const encodedWord = encodeWord(obj.word)
  console.log(encodedWord)

  return obj
}

module.exports = hebrewWords
