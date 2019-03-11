const {flatten, map} = require('lodash')
const hebrewChars = require('../../hebrew-chars')

const checkForInvalidChars = word => {

  const allChars = flatten(map(hebrewChars.allExcComplexVowels, 'char'))

  for (let i = 0; i < word.length; i++) {

    const char1 = word[i]
    const char2 = word[i] + word[i + 1]

    const char1Found = allChars.includes(char1)
    const char2Found = allChars.includes(char2)

    if (!char1Found && !char2Found) {
      throw Error(`Non Hebraic character - ${char1} - detected in word`)
    }
    if (char2Found) i++
  }
}

module.exports = checkForInvalidChars
