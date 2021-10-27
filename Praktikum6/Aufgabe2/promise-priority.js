//
//  Priorities in the event loop
//

Promise.resolve().then(() => console.log('promise resolved'))
setImmediate(() => console.log('set immediate'))
process.nextTick(() => console.log('next tick')) //1
setTimeout(() => console.log('set timeout'), 0)

Promise.resolve().then(() => console.log('promise1 resolved'))
Promise.resolve().then(() => console.log('promise2 resolved'))
Promise.resolve().then(() => {
    console.log('promise3 resolved')
    process.nextTick(() => console.log('next tick inside promise resolve handler'))
})
Promise.resolve().then(() => console.log('promise4 resolved'))
Promise.resolve().then(() => console.log('promise5 resolved'))

setImmediate(() => console.log('set immediate1'))
setImmediate(() => console.log('set immediate2'))

process.nextTick(() => console.log('next tick1')) //2
process.nextTick(() => console.log('next tick2')) //3
process.nextTick(() => console.log('next tick3')) //4

setTimeout(() => console.log('set timeout'), 0)
setImmediate(() => console.log('set immediate3'))
setImmediate(() => console.log('set immediate4'))
