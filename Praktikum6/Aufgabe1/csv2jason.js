const fs = require('fs')

function csv2jason(filepath, outputFilepath, separator = ',') {
    const starttime = new Date();
    let status
    let content

    try {
        status = fs.statSync(filepath)
        content = fs.readFileSync(filepath, 'utf-8')
    } catch (error) {
        console.log(error)
        return false
    }


    const timeAfterReading = new Date()
    let tookTime = timeAfterReading - starttime

    console.log('Grösse das Files: ${status.size}')
    console.log('Datum letzte Veränderung: ${status.mtime}')
    console.log('Gebrauchte Zeit zum File lesen: ${tookTime} ms')

    let rows = content.split('\n')
    let regex = new RegExp(`(".*?"|[^"${separator}\\s]+)(?=\\s*${separator}|\\s*$)`, 'g')
    let columnName = rows.shift().match(regex)
    let result = []

    console.log('Anzahl Reihen im File sind: ${row.length}')

    for (const row of rows){
        let columns = row.split(separator)
        let entry = {}

        for (let s = 0; s < columns.length; s++){
            entry[columnName[s]] = columns[s]
        }

        result.push(entry)
    }

    const json = JSON.stringify(result, null, '\t')

    try {
        fs.writeFileSync(outputFilepath, json)
    } catch (error) {
        console.error(error)
        return false
    }

    const endTime = new Date()
    const timeDiff = endTime - starttime
    console.log('Zeit für den ganzen Prozess hat : ${timeDiff} mS')

    return true
}

const args = process.argv.slice(2)
const inputFilePath = args[0]
const outputFilepath = args[1]

csv2jason(inputFilePath, outputFilepath)

module.exports = {csv2jason}
