//
//  nexttick vs. immediate and timeout events
//

const fs = require('fs')
const process = require('process')

fs.readFile("nexttick.js", () => {
  
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  
  setImmediate(() => {
    console.log('immediate')
  })
  
  process.nextTick(() => {
    console.log('nexttick')
  })

})

/**
 * Ausgaben-Reihenfolge:
 * 1. nexttick
 * 2. immediate
 * 3. nexttick
 */

/**
 * Begründung:
 * NexttickQueue werden so frühe wie möglich abgearbeitet und ist nicht Teil des Event Loops
 * daher wird es vor dem immediate ausgeführt
 */