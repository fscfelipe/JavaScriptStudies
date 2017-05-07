const https = require('https');
const api = require('./weatherAPI.json');

// Print out temp details
function printWeather(weather) {
    const message = `Curent temperature in ${weather.location.city} is ${weather.current_observation.temp_c} °C`;
    console.log(message);
}
// Print out error message
function printError(error) {
    console.error(error.message);
}

function getTemp(query) {
    // Take out underscore for readability
    const readableQuery = query.replace('_', ' ');
    try {
        const request =
            https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
                if (response.statusCode === 200) {
                    let body = "";
                    // Read the data
                    response.on('data', chunk => {
                        body += chunk;
                    });

                    response.on('end', () => {
                        try {
                            //Parse data
                            const weather = JSON.parse(body);
                            // Check if the location was found before printing
                            if (weather.location) {
                                //Print data
                                printWeather(weather);
                            } else {
                                const queryError = new Error(`The location "${readableQuery}" was not found`);
                                printError(queryError);
                            }
                        } catch (error) {
                            // Parse error
                            printError(error);
                        }
                    });
                } else {
                    // Status code error
                    const statusCodeError = new Error(`There was an error getting the message for ${readableQuery}.(${http.STATUS_CODES[response.statusCode]})`);
                    printError(statusCodeError);
                }
            });

            request.on('error', printError);
    } catch (error) {
        // Malformed URL error
        printError(error);

    }

}

getTemp("CA/San_Francisco");