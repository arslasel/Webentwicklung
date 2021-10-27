const fs = require('fs');

const csv2jsonPromise = async (filepath, outputFilepath, separator = ',') => {
    const startTime = new Date();
    let stats, content;

    try {
        stats = await fs.promises.stat(filepath);
        content = await fs.promises.readFile(filepath, 'utf8');
    } catch (e) {
        console.error(e);
        return false;
    }

    const timeAfterReading = new Date();
    const timeDiffReading = timeAfterReading - startTime;

    console.log(`File size: ${stats.size}`);
    console.log(`Last modified: ${stats.mtime}`);
    console.log(`Time elapsed for reading: ${timeDiffReading} ms`);

    const rows = content.split('\n');
    const regex = new RegExp(`(".*?"|[^"${separator}\\s]+)(?=\\s*${separator}|\\s*$)`, 'g')
    const columnNames = rows.shift().match(regex);
    const result = [];

    console.log(`Number of rows: ${rows.length}`);

    for (const row of rows) {
        const columns = row.split(separator);
        const entry = {};

        for (let i = 0; i < columns.length; i++) {
            entry[columnNames[i]] = columns[i];
        }

        result.push(entry);
    }

    const json = JSON.stringify(result, null, '\t');

    try {
        await fs.promises.writeFile(outputFilepath, json);
    } catch (e) {
        console.error(e);
        return false;
    }

    const endTime = new Date();
    const timeDiff = endTime - startTime;
    console.log(`Time elapsed for processing: ${timeDiff} ms`);

    return true;
}

const args = process.argv.slice(2);
const inputFilePath = args[0];
const outputFilePath = args[1];

csv2jsonPromise(inputFilePath, outputFilePath).then(() => console.log('Processing done'));

module.exports = { csv2jsonPromise };