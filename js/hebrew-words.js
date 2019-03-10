const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const encodeWord = require('./tasks/encode-word')
const encodeSyllables = require('./tasks/encode-syllables')

const hebrewWords = word => {

  const obj = {word}

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  const encodedWord = encodeWord(obj.word)
  const encodedSyllables = encodeSyllables(encodedWord)
  console.log(encodedSyllables)

  return obj
}

module.exports = hebrewWords
