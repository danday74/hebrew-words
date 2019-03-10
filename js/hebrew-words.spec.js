const chai = require('chai')
const expect = chai.expect

const hebrewWords = require('./hebrew-words')

describe('hebrew words', () => {

  it('non hebrew word', () => {
    const word = 'test'
    const actual = hebrewWords(word)
    const expected = {
      word,
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
      ok: true,
      error: null,
      syllables: ['שָׁ', 'לוֹם'],
      sounds: ['sha-lom']
    }
    expect(actual).to.eql(expected)
  })

  it('eesh-sha     woman, wife', () => {
    const word = 'אִשָּׁה'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null,
      syllables: ['אִשׁ', 'שָׁה'],
      sounds: ['eesh-sha']
    }
    expect(actual).to.eql(expected)
  })

  it('heeg-geed    he declared, he told', () => {
    const word = 'הִגִּיד'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null,
      syllables: ['הִגּ', 'גִּיד'],
      sounds: ['heeg-geed']
    }
    expect(actual).to.eql(expected)
  })

  it('meesh-kan    dwelling place, tabernacle', () => {
    const word = 'מִשְׁכָּן'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null,
      syllables: ['מִשְׁ', 'כָּן'],
      sounds: ['meesh-kan', 'meesh-kon']
    }
    expect(actual).to.eql(expected)
  })

  it('mal-ach      messenger, angel', () => {
    const word = 'מַלְאָךְ'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null,
      syllables: ['מַלְ', 'אָךְ'],
      sounds: ['mal-ach', 'mal-och']
    }
    expect(actual).to.eql(expected)
  })

  it('necho-shet   copper, bronze', () => {
    const word = 'נְחֹשֶׁת'
    const actual = hebrewWords(word)
    const expected = {
      word,
      ok: true,
      error: null,
      syllables: ['נְחֹ', 'שֶׁת'],
      sounds: ['necho-shet']
    }
    expect(actual).to.eql(expected)
  })
})
