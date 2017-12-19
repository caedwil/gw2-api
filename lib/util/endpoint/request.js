const https = require('https');

function request(endpoint, params, cb) {
  // Concatenate the base URL and the endpoint to create an
  // unparameterized URL.
  if (!endpoint.startsWith('/')) endpoint = '/' + endpoint;
  let url = 'https://api.guildwars2.com/v2' + endpoint;

  // Append all, if any, of the specified parameters to the URL.
  if (params && typeof params === 'object') {
    let count = 0;
    for (let param in params) {
      // If the parameter is undefined, then it should be skipped.
      if (params[param] === undefined || params[param] === null) continue;

      // Append either a '?' or '&' to the URL depending on what is
      // needed.
      url += (count++ > 0) ? '&' : '?';

      // Append the parameter name to the URL.
      url += param + '=';

      // Append the parameter value based on its type.
      if (Array.isArray(params[param])) {
        // The value is an array and should be joined using commas.
        url += params[param].join(',');
      } else {
        // Just append the value without altering it.
        url += params[param];
      }
    }
  }

  // Make the API request over HTTPS.
  https.get(url, res => {
    // Get the full stream of data.
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // It is assumed that all data the API sends is in JSON format.
      // Attempt to parse the response as such.
      try {
        // Parse the response.
        let result = JSON.parse(data);
        // If the status code of the response is not 200, then some
        // error has occured.
        if (res.statusCode !== 200) {
          cb(result);
        } else {
          cb(null, result);
        }
      } catch (exception) {
        // Send the exception via callback.
        cb(exception);
      }
    });
  }).on('error', err => {
    // Send the error via the callback.
    cb(err);
  });
}

module.exports = request;
