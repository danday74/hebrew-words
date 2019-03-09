const consonants = require('./consonants')
const vowelsSimple = require('./vowels-simple')
const vowelsComplex = require('./vowels-complex')
const nonVowels = require('./non-vowels')
const dagesh = {
  name: 'dagesh',
  value: 'ּ',
  chars: ['']
}

module.exports = {
  consonants,
  vowelsSimple,
  vowelsComplex,
  nonVowels,
  all: [...consonants, ...vowelsSimple, ...nonVowels, dagesh]
}
