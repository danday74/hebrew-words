const fs = require('fs')
const tidyHtml = require('../tidy-html')

const chavVa = fs.readFileSync(__dirname + '/chav-va.html', 'utf8')
const chochMa1 = fs.readFileSync(__dirname + '/choch-ma-1.html', 'utf8')
const chochMa2 = fs.readFileSync(__dirname + '/choch-ma-2.html', 'utf8')
const eeshSha = fs.readFileSync(__dirname + '/eesh-sha.html', 'utf8')
const heegGeed = fs.readFileSync(__dirname + '/heeg-geed.html', 'utf8')
const malAch = fs.readFileSync(__dirname + '/mal-ach.html', 'utf8')
const meeshKan = fs.readFileSync(__dirname + '/meesh-kan.html', 'utf8')
const naSa = fs.readFileSync(__dirname + '/na-sa.html', 'utf8')
const neFesh = fs.readFileSync(__dirname + '/ne-fesh.html', 'utf8')
const nechoShet1 = fs.readFileSync(__dirname + '/necho-shet-1.html', 'utf8')
const nechoShet2 = fs.readFileSync(__dirname + '/necho-shet-2.html', 'utf8')
const shalom = fs.readFileSync(__dirname + '/sha-lom.html', 'utf8')
const shenaYeem = fs.readFileSync(__dirname + '/shena-yeem.html', 'utf8')
const yerooShaLaYeem = fs.readFileSync(__dirname + '/yeroo-sha-la-yeem.html', 'utf8')

const consonant = {
  chavVa: tidyHtml(chavVa),
  chochMa1: tidyHtml(chochMa1),
  chochMa2: tidyHtml(chochMa2),
  eeshSha: tidyHtml(eeshSha),
  heegGeed: tidyHtml(heegGeed),
  malAch: tidyHtml(malAch),
  meeshKan: tidyHtml(meeshKan),
  naSa: tidyHtml(naSa),
  neFesh: tidyHtml(neFesh),
  nechoShet1: tidyHtml(nechoShet1),
  nechoShet2: tidyHtml(nechoShet2),
  shalom: tidyHtml(shalom),
  shenaYeem: tidyHtml(shenaYeem),
  yerooShaLaYeem: tidyHtml(yerooShaLaYeem)
}

module.exports = consonant
