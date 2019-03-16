const {find} = require('lodash')
const shared = require('../../utils/shared')
const hebrewChars = require('../../hebrew-chars')
const all = hebrewChars.allIncComplexVowels

// When the counter is incremented for a consonant we need to check the chunk exists
const checkChunk = (chunk, type) => {
  /* istanbul ignore if */
  if (chunk.length !== 1) throw Error(`Cannot find the chunk (for a ${type})`)
  return chunk
}

const syllableClassesForDoubles = (chunk, class1, class2) => {
  const class12 = `${class1}-${class2}`
  const class21 = `${class2}-${class1}`
  if (chunk.hasClass(class1) && chunk.hasClass(class2) && !chunk.hasClass(class12) && !chunk.hasClass(class21)) {
    const classes = chunk.attr('class')
    const indexOfClass1 = classes.indexOf(' ' + class1)
    const indexOfClass2 = classes.indexOf(' ' + class2)
    chunk.removeClass(class1).removeClass(class2)
    if (indexOfClass1 < indexOfClass2) chunk.addClass(class12)
    /* istanbul ignore else */
    else if (indexOfClass1 > indexOfClass2) chunk.addClass(class21)
    else throw Error('Could not determine syllable classes for doubles')
  }
}

const populateLayer = ($, syllables, stress) => {

  let prevChar
  let j = 0

  syllables.forEach((syllable, i) => {

    const open = shared.isSyllableOpen(syllable)
    const stressObj = shared.getStressObj(syllables, i, stress)

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
        /* istanbul ignore if */
        if (chunks.dagesh(j).hasClass('weak')) throw Error('Dagesh cannot be weak and strong')

      } else {

        // consonants
        if (char.type === 'C') {

          j++
          const chunk = checkChunk(chunks.consonant(j), 'consonant')
          chunk.addClass(char.name.replace('-final', '')).addClass(char.name)
          if (char.final) chunk.addClass('final')

          if (char.name === 'shin') chunks.shinAndSin(j).addClass('shin-dot')
          if (char.name === 'sin') chunks.shinAndSin(j).addClass('sin-dot')

          if (char.begadKepat) {
            chunks.consonant(j).addClass('begad-kepat')
            chunks.dagesh(j).addClass('dagesh')
            chunks.dagesh(j).addClass(prevChar && prevChar.type === 'V' ? 'strong' : 'weak')
            chunks.dagesh(j).addClass('begad-kepat')
          }
        }

        // simple vowels
        else if (char.type === 'V' && char.subType === 'S') {
          chunks.vowel(j).addClass(char.name).addClass(char.typeName).addClass(char.short ? 'short' : 'long')
        }

        // non vowels
        else if (char.type === 'N') {
          chunks.vowel(j).addClass(char.name).addClass(char.typeName)
        }

        // complex vowels exc shuruq and holem-vav
        else if (char.type === 'V' && char.subType === 'C' && char.name !== 'shuruq' && char.name !== 'holem-vav') {

          chunks.vowel(j).addClass(char.firstChar).addClass(char.name).addClass(char.typeName).addClass('long')

          j++
          const chunk = checkChunk(chunks.consonant(j), 'complex vowel')
          chunk.addClass(char.secondChar).addClass(char.name).addClass(char.typeName).addClass('long')
        }

        // shuruq and holem-vav
        /* istanbul ignore else */
        else if (char.name === 'shuruq' || char.name === 'holem-vav') {

          j++
          const chunk = checkChunk(chunks.consonant(j), 'shuruq or holem-vav')
          chunk.addClass(char.firstChar).addClass(char.name).addClass(char.typeName).addClass('long')

          if (char.name === 'shuruq') {
            chunks.dagesh(j).addClass(char.secondChar).addClass(char.name).addClass(char.typeName).addClass('long')
          } else {
            chunks.vowel(j).addClass(char.secondChar).addClass(char.name).addClass(char.typeName).addClass('long')
          }

        } else {
          throw Error('Failed to identify char >> ' + JSON.stringify(char))
        }
      }

      // syllables
      const chunk = chunks.letter(j)
      chunk.addClass(`syllable-${i + 1}`)

      // even or odd
      if (i % 2 === 1) chunk.addClass('even')
      if (i % 2 === 0) chunk.addClass('odd')
      syllableClassesForDoubles(chunk, 'even', 'odd')

      // open or closed
      if (open) chunk.addClass('open')
      if (!open) chunk.addClass('closed')
      syllableClassesForDoubles(chunk, 'open', 'closed')

      // penultimate or ultimate
      if (stressObj.penultimate) chunk.addClass('penultimate')
      if (stressObj.ultimate) chunk.addClass('ultimate')
      syllableClassesForDoubles(chunk, 'penultimate', 'ultimate')

      // accented or unaccented
      if (stressObj.accented === true) chunk.addClass('accented')
      if (stressObj.accented === false) chunk.addClass('unaccented')
      syllableClassesForDoubles(chunk, 'accented', 'unaccented')

      prevChar = char
    })
  })

  return $
}

module.exports = populateLayer
