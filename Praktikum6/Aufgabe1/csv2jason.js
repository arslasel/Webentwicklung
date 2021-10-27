const fs = require('fs')

//var args = process.argv.slice(2);
let inputfile = dirname + '/csv/population.csv' //args[0] using hardcoded paths because its easier to debug 
let outputfile = dirname + '/output.json' //args[1] using hardcoded paths because its easier to debug

var start = new Date()
let data = fs.readFileSync(inputfile, 'utf8')
let stats = fs.statSync(inputfile)
var elapsed = new Date() - start

console.log('File size is :', stats.size, ' bytes')
console.log('File was last modified at ', stats.mtime)
console.log('The file has ', data.split('\n').length, ' lines (including head)')
console.log('It took ', elapsed, 'ms to read the file data and stats ')

function csv2json(csvfilepath, outputpath) {
    return new Promise((resolve, reject) => {
        fs.readFile(csvfilepath, 'utf8', (err, data) => {
            if (err) reject(err)
            else {
                let result = []
                let cols = []
                data.split('\n').forEach((line) => {
                    if (data.indexOf(line) == 0) {
                        line.split(',').forEach((col) => {
                            cols.push(col)
                        })
                    } else {
                        let jsonEntry = {}
                        let csvData = line.split(',')
                        csvData.forEach((value) => {
                            jsonEntry[cols[csvData.indexOf(value)]] = value
                        })
                        result.push(jsonEntry)
                    }
                })

                fs.writeFile(outputpath, JSON.stringify(result), (err) => {
                    if (err) reject(err)
                    else resolve()
                })

            }
        })
    })
}

csv2json(inputfile, outputfile)
    .then((result) => {
        console.log('Yeah Results at : ', outputfile)
    })
    .catch(() => {
        console.log('Something went wrong')
    })