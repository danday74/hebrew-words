const {flatten, map} = require('lodash')
const hebrewChars = require('../../hebrew-chars')

const index = obj => {

  const word = obj.word

  const allChars = flatten(map(hebrewChars.allExcComplexVowels, 'char'))

  let ok = true
  let error = null

  for (let i = 0; i < word.length; i++) {

    const char1 = word[i]
    const char2 = word[i] + word[i + 1]

    const char1Found = allChars.includes(char1)
    const char2Found = allChars.includes(char2)

    if (!char1Found && !char2Found) {
      ok = false
      error = `Non Hebraic character - ${char1} - detected in word`
      break
    }
    if (char2Found) i++
  }

  obj.ok = ok
  obj.error = error
}

module.exports = index
