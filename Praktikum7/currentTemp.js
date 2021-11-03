var https = require('https');
let city = process.argv.slice(2)[0]

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'wttr.in',
  path: '/' + city + '?format=j1'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(JSON.parse(str).current_condition[0].temp_C + '°');
  });
}

https.get(options, callback);
