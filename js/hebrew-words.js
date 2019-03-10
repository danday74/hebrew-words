const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const encodeWord = require('./tasks/encode-word')
const getStress = require('./tasks/get-stress')
const encodeSyllables = require('./tasks/encode-syllables')
const getSyllables = require('./tasks/get-syllables')
const getSounds = require('./tasks/get-sounds')
const getTransliteration = require('./tasks/get-transliteration')

const hebrewWords = (word, stressOnPenultimateSyllable) => {

  const obj = {
    word,
    notes: [],
    stress: null,
    syllables: [],
    sounds: [],
    transliterations: [],
    // ok: true,
    error: null
  }

  checkForInvalidChars(obj)
  if (!obj.ok) return obj

  const encodedWord = encodeWord(obj.word)
  getStress(obj, word, encodedWord, stressOnPenultimateSyllable)

  const encodedSyllables = encodeSyllables(encodedWord)
  getSyllables(obj, encodedSyllables)
  getSounds(obj, encodedSyllables)
  getTransliteration(obj, encodedSyllables)

  return obj
}

module.exports = hebrewWords
