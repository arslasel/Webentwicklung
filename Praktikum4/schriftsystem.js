const SCRIPTS = require('./scripts.js')

require('./scripts.js')
console.log(SCRIPTS[0])


function oldAndLiving(scripts){
    return scripts.filter(it => it.year < 0 && it.living).map(it => it.name)
}

console.log(oldAndLiving(SCRIPTS))

function numberOfCodesAlternativ({ranges}){
    return ranges.reduce((current, [from, to]) => current + to - from, 0)
}

console.log(numberOfCodesAlternativ(SCRIPTS[3]))


const numberOfCodes = ({ranges}) => {
    let result = 0
    ranges.forEach(([from, to]) => result += to - from);
    return result
}

console.log(numberOfCodes(SCRIPTS[3]))



function scriptOfSample(text, scripts){
    const codeAt = text.codePointAt(0);

    const script = scripts.find(({ ranges }) => {
        const range = ranges.find(([from, to]) => codeAt >= from && codeAt <= to)
        return !!range
    });

    return script ? script.name : 'unknown';
}


function scriptsInString(text){
    let result = {}

    for (let i = 0; i < text.length; i++) {
        const script = scriptOfSample(text[i], SCRIPTS)
        if (result.hasOwnProperty(script)){
            result[script]++
        } 
        else {
            result[script] = 1
        }
    }

    return result
}


console.log("-------------Zeichencodierung---------------")
console.log(scriptOfSample("A", SCRIPTS) ) // "Latin"
console.log(scriptOfSample("英", SCRIPTS) ) // "Han"
console.log(scriptOfSample("я", SCRIPTS) ) // "Cyrillic"
console.log("-------------------ENDE---------------------")


console.log("-------------Anzahl Schriftsysteme-----------")
console.log( scriptsInString('英国的狗说 "JavaScript", "тяв"'))
console.log("-------------------ENDE---------------------")