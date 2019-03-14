const hebrewChars = require('../../hebrew-chars')
const consonantChars = hebrewChars.consonants.map(consonant => consonant.char)
const plainConsonantChars = [...consonantChars, 'ש']

const populateConsonantLayer = ($, word, consonantCount) => {

  let i = 0

  const chars = word.split('')
  chars.forEach(char => {
    const isConsonant = plainConsonantChars.includes(char)
    if (isConsonant) {
      i++
      $(`.letter-${i} .content-chunk`).text(char)
    }
  })

  /* istanbul ignore if */
  if (consonantCount !== i) throw Error('char count does not match consonant count')
  return $
}

module.exports = populateConsonantLayer
