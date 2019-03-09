const consonants = require('./consonants')
const vowelsSimple = require('./vowels-simple')
const vowelsComplex = require('./vowels-complex')
const nonVowels = require('./non-vowels')

module.exports = {
  consonants,
  vowelsSimple,
  vowelsComplex,
  nonVowels,
  all: [...consonants, ...vowelsSimple, ...vowelsComplex, ...nonVowels]
}
