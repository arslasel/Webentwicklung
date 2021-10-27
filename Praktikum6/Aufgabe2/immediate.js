//
// timeout vs immediate
//
const fs = require('fs')

setTimeout(() => {
  console.log('timeout')
}, 0)

setImmediate(() => {
  console.log('immediate')
})

fs.readFile("immediate2.js", () => {
  setTimeout(() => {
    console.log('timeout from readFile callback')
  }, 0)
  setImmediate(() => {
    console.log('immediate from readFile callback')
  })
})

console.log('script started')


/**
 *Ausgabe-Reihenfolge:
 1. script started 
 2. timeout
 3. immediate
 4. immediate from readFile callback
 5. timeout from readFile callback
 */

/**
 * Begründung: Gemäss Vorlesung SW6
 * SetTimeout bei null ist schneller im Stack bei der Verarbeitung wie SetImmediate darum kommst erst 
 * setTimeOut an die Reihe
 * In der Funktion wiederrum, ist SetImmediate schnell an der Reihe
 */