const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const getWordId = require('./tasks/get-word-id')

const hebrewWords = word => {

  const obj = {word}

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  const wordId = getWordId(obj)
  console.log(wordId)

  return obj
}

module.exports = hebrewWords
