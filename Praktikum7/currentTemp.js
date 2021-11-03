const https = require('https')

const get = async (url) => {
    return new Promise((resolve) => {
        https.get(url, result => {
            let data = '';

            result.on('data', chunk => { data += chunk })
            result.on('end', () => {
                resolve(JSON.parse(data));
            })
        });
    });
}

const getTemperature = async (location) => {
    const data = await get(`https://wttr.in/${location}?format=j1`);
    return data['current_condition'][0]['temp_C'];
}

const args = process.argv.slice(2);

getTemperature(args[0]).then(temperature => {
    console.log(`${temperature}° C`);
});