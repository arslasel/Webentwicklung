const fs = require('fs');

const csv2jsonAsync = (filepath, outputFilepath, separator = ',') => {
    const startTime = new Date();
    let status = true;

    fs.stat(filepath, (error, stats) => {
        if (error) {
            console.error(error);
            status = false;
            return;
        }

        fs.readFile(filepath, 'utf8', (error, content) => {
            if (error) {
                console.log(error);
                status = false;
                return;
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

            fs.writeFile(outputFilepath, json, (error) => {
                if (error) {
                    console.error(error);
                }

                status = !error;
            });

            const endTime = new Date();
            const timeDiff = endTime - startTime;
            console.log(`Time elapsed for processing: ${timeDiff} ms`);
        });
    });

    return status;
}

const args = process.argv.slice(2);
const inputFilePath = args[0];
const outputFilePath = args[1];

csv2jsonAsync(inputFilePath, outputFilePath);

module.exports = { csv2jsonAsync };