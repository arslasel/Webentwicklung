//
//  Example using EventEmitter
//
const EventEmitter = require('events')
const door = new EventEmitter()

door.on('open', (arg) => {
  console.log('Door was opened ' + arg)
})

process.nextTick(() => {
  console.log('next tick')
  door.emit('open', 'async')
})

door.emit('open', 'sync')

/**
 * Ausgaben-Reihefolge
 * 1. Door was open sync
 * 2. next tick
 * 3. Door was opened async
 */

/**
 * Begründung:
 * Erst werden all Callstack aufgaben abgearbeitet bzw die Synchronenoperationen
 * Danach kommt das Nexttick zum zug
 */