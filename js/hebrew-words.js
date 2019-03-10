const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const encodeWord = require('./tasks/encode-word')
const encodeSyllables = require('./tasks/encode-syllables')
const getSyllables = require('./tasks/get-syllables')

const hebrewWords = word => {

  const obj = {word}

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  const encodedWord = encodeWord(obj.word)
  const encodedSyllables = encodeSyllables(encodedWord)
  getSyllables(obj, encodedSyllables)

  return obj
}

module.exports = hebrewWords
