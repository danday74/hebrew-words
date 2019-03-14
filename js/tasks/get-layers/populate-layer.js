const {find} = require('lodash')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

// When the counter is incremented for a consonant we need to check the chunk exists
const checkChunk = (chunk, type) => {
  if (chunk.length !== 1) throw Error(`Cannot find the chunk (for a ${type})`)
  return chunk
}

const populateLayer = ($, encodedSyllables) => {

  let prevChar
  let j = 0

  encodedSyllables.forEach((syllable, i) => {

    const penultimate = encodedSyllables.length === i + 2
    const ultimate = encodedSyllables.length === i + 1

    const chars = syllable.split('')
    chars.forEach(x => {

      const char = find(all, {id: x})
      const chunks = {
        letter: x => $(`.letter-${x}.letter-chunk`), // no space
        consonant: x => $(`.letter-${x} .consonant-chunk`),
        shinAndSin: x => $(`.letter-${x} .shin-and-sin-chunk`),
        dagesh: x => $(`.letter-${x} .dagesh-chunk`),
        vowel: x => $(`.letter-${x} .vowel-chunk`)
      }
      const isDouble = prevChar && char.id === prevChar.id

      if (isDouble) {
        chunks.consonant(j).addClass('double')
        chunks.dagesh(j).addClass('dagesh').addClass('strong')
      } else {

        // consonants
        if (char.type === 'C') {

          j++
          const chunk = checkChunk(chunks.consonant(j), 'consonant')
          chunk.addClass(char.name)
          if (char.final) chunk.addClass('final')

          if (char.name === 'shin') chunks.shinAndSin(j).addClass('shin-dot')
          if (char.name === 'sin') chunks.shinAndSin(j).addClass('sin-dot')

          if (char.begadKepat) {
            chunks.dagesh(j).addClass('dagesh')
            chunks.dagesh(j).addClass(prevChar && prevChar.type === 'V' ? 'strong' : 'weak')
          }
        }

        // simple vowels
        else if (char.type === 'V' && char.subType === 'S') {
          chunks.vowel(j).addClass(char.name).addClass(char.typeName)
        }

        // non vowels
        else if (char.type === 'N') {
          chunks.vowel(j).addClass(char.name).addClass(char.typeName)
        }

        // complex vowels exc shuruq and holem-vav
        else if (char.type === 'V' && char.subType === 'C' && char.name !== 'shuruq' && char.name !== 'holem-vav') {

          chunks.vowel(j).addClass(char.name).addClass(char.typeName)

          j++
          const chunk = checkChunk(chunks.consonant(j), 'complex vowel')
          chunk.addClass(char.name).addClass(char.typeName)
        }

        // shuruq and holem-vav
        else if (char.name === 'shuruq' || char.name === 'holem-vav') {

          j++
          const chunk = checkChunk(chunks.consonant(j), 'shuruq or holem-vav')
          chunk.addClass(char.name).addClass(char.typeName)

          chunks.vowel(j).addClass(char.name)

        } else {
          throw Error('Failed to identify char >> ' + JSON.stringify(char))
        }
      }

      // syllables
      chunks.letter(j).addClass(`syllable-${i + 1}`)
      chunks.letter(j).addClass(`syllable-${i % 2 === 1 ? 'even' : 'odd'}`)
      if (penultimate) chunks.letter(j).addClass('penultimate')
      if (ultimate) chunks.letter(j).addClass('ultimate')
      if (chunks.letter(j).hasClass(`syllable-${i}`)) {
        chunks.letter(j).removeClass('syllable-even').removeClass('syllable-odd')
        chunks.letter(j).addClass(`syllable-${i % 2 === 1 ? 'odd-even' : 'even-odd'}`)
      }

      prevChar = char
    })
  })

  return $
}

module.exports = populateLayer
