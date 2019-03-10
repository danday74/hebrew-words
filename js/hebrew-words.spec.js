const chai = require('chai')
const expect = chai.expect

const hebrewWords = require('./hebrew-words')

describe('hebrew words', () => {

  it('non hebrew word', () => {
    const word = 'test'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      stress: null,
      syllables: [],
      sounds: [],
      transliterations: [],
      ok: false,
      error: 'Non Hebraic character - t - detected in word'
    }
    expect(actual).to.eql(expected)
  })

  it('sha-lom      completeness, soundness', () => {
    const word = 'שָׁלוֹם'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      stress: null,
      syllables: ['שָׁ', 'לוֹם'],
      sounds: ['sha-lom'],
      transliterations: ['šālôm'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('eesh-sha     woman, wife', () => {
    const word = 'אִשָּׁה'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      stress: null,
      syllables: ['אִשׁ', 'שָׁה'],
      sounds: ['eesh-sha'],
      transliterations: ['’iššāh'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('heeg-geed    he declared, he told', () => {
    const word = 'הִגִּיד'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      stress: null,
      syllables: ['הִגּ', 'גִּיד'],
      sounds: ['heeg-geed'],
      transliterations: ['higgîḏ'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('meesh-kan    dwelling place, tabernacle', () => {
    const word = 'מִשְׁכָּן'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      stress: null,
      syllables: ['מִשְׁ', 'כָּן'],
      sounds: ['meesh-kan', 'meesh-kon'],
      transliterations: ['miškān', 'miškon'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('mal-ach      messenger, angel', () => {
    const word = 'מַלְאָךְ'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      stress: null,
      syllables: ['מַלְ', 'אָךְ'],
      sounds: ['mal-ach', 'mal-och'],
      transliterations: ['mal’āḵ', 'mal’oḵ'],
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('necho-shet   copper, bronze', () => {
    const word = 'נְחֹשֶׁת'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: [],
      stress: null,
      syllables: ['נְחֹ', 'שֶׁת'],
      sounds: ['necho-shet'],
      transliterations: ['nəḥōšeṯ'], // TODO: THIS WORD HAS STRESS ON - nəḥṓšeṯ - BUT REMOVED FOR NOW, TEST IT WHEN SUPPORT ADDED FOR STRESS
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })

  it('shena-yeem   two', () => {
    const word = 'שְׁנַיִם'
    const actual = hebrewWords(word)
    const expected = {
      word,
      notes: ['ends with ayim'],
      stress: 'penultimate',
      syllables: ['שְׁנַ', 'יִם'],
      sounds: ['shena-yeem'],
      transliterations: ['šənáyim'], // TODO: STRESS ISSUES
      ok: true,
      error: null
    }
    expect(actual).to.eql(expected)
  })
})
