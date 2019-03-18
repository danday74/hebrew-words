const checkForInvalidChars = require('./tasks/check-for-invalid-chars')
const halfEncodeWord = require('./tasks/half-encode-word')
const getStress = require('./tasks/get-stress')
const encodeSyllables = require('./tasks/encode-syllables')
const adjustSyllablesForShevaAndQamats = require('./tasks/adjust-syllables')
const getSyllables = require('./tasks/get-syllables')
const getCounts = require('./tasks/get-counts')
const getSounds = require('./tasks/get-sounds')
const getTransliteration = require('./tasks/get-transliteration')
const getLayers = require('./tasks/get-layers')

const hebrewWords = (word, stressOnPenultimateSyllable = null) => {

  const obj = {
    word,
    notes: [],
    layers: {},
    ok: true,
    error: null
  }

  try {

    checkForInvalidChars(obj.word)

    const halfEncodedWord = halfEncodeWord(obj.word)

    getStress(obj, word, halfEncodedWord, stressOnPenultimateSyllable)

    const syllables = encodeSyllables(halfEncodedWord)
    const encodedSyllables = adjustSyllablesForShevaAndQamats(syllables, obj.stress)
    const encodedWord = encodedSyllables.join('')

    getSyllables(obj, encodedSyllables)
    getCounts(obj, encodedWord)
    getSounds(obj, encodedSyllables)
    getTransliteration(obj, encodedSyllables)
    getLayers(obj, encodedSyllables)

    return obj

  } catch (error) {
    return {word, ok: false, error: error.message, layers: {}}
  }
}

module.exports = hebrewWords
