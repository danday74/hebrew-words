const adjustSheva = require('./adjust-sheva')
const adjustQamats = require('./adjust-qamats')

const adjustSyllablesForShevaAndQamats = (syllables, stress) => {
  return syllables.map((syllable, i) => {
    syllable = adjustSheva(syllable)
    syllable = adjustQamats(syllables, syllable, i, stress)
    return syllable
  })
}

module.exports = adjustSyllablesForShevaAndQamats
