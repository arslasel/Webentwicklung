function equal(x, y) {
    if (x === y) {
        return true
    }
    /**
     * ISt auch eine Möglichkeit -> if (typeof a == 'object' && typeof b == 'object') {
                                        return JSON.stringify(a) == JSON.stringify(b)
                                        }
     */
    if (isObject(x) && isObject(y)) {
        const xKeys = Object.keys(x)
        const yKeys = Object.keys(y)
            //jeden Key vergleichen mit every()
        const checkX = xKeys.every((key) => yKeys.includes(key) && x[key] === y[key])
        const checkY = yKeys.every((key) => xKeys.includes(key) && x[key] === y[key])
        return checkX && checkY
    }
    return false
}

/**
 * Prüfen ob das argument ein Objekt ist
 */
const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * Aufgabe a.)
 */

let emptyObj = {}

console.log(equal(16, 16))
console.log(equal('hi', 'hi'))
console.log(equal({}, {}))
console.log(equal({ a: 1, b: 2 }, { b: 2, a: 1 }))
console.log(equal({ a: 1, b: 2 }, { c: 3, b: 2, a: 1 }))
console.log(equal({ a: {} }, { a: {} }))
console.log(equal({ a: emptyObj }, { a: emptyObj }))

/**
 * Aufgabe b.) Vergleicht Ihre equal-Funktion auch den Inhalt von Arrays? Warum oder warum nicht? Probieren Sie es aus
 */
console.log('___________________ARRAY__________________')
console.log([10], [10])
console.log([6], [8])


//version 2
function equal2(a, b) {
    if (a === b && !(typeof a == 'object' && typeof b == 'object')) {
        return true
    } else {
        if (JSON.stringify(Object.keys(a)) == JSON.stringify(Object.keys(b))) {
            let mismatch = false
            Object.keys(a).forEach((k) => {
                if (!equal2(a[k], b[k])) {
                    mismatch = true
                }
            })
            if (mismatch) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
}


function test(func) {
    console.log(func(16, 16))
    console.log(func('hi', 'hi'))
    console.log(func({}, {}))
    console.log(func({ a: 1, b: 2 }, { b: 2, a: 1 }))
    console.log(func({ a: 1, b: 2 }, { c: 3, b: 2, a: 1 }))
    console.log(func({ a: {} }, { a: {} }))
    console.log(func({ a: emptyObj }, { a: emptyObj }))
    console.log(func([1, 2, 3], [2, 3, 4]))
    console.log(func([1, 2, 3], [1, 2, 3]))

    let a = [1, 2]
    let b = [1, 2]
    a.foo = 1
    b.bar = 2
    console.log(func(a, b))

    let c = [1, 2]
    let d = [1, 2]
    c.foo = 1
    d.foo = 1
    console.log(func(c, d))
}

console.log("--------------------selim")
test(equal)
console.log("--------------------gino")
test(equal3)