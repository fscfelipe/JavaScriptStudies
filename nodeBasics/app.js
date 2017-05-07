// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Require https module
const https = require('https');

// Require http module for status code
const http = require('http');

function printMessage(username, badgeCount, point) {
    const message = username + " has " + badgeCount + " total badge(s) and " + point + " points in JavaScript";
    console.log(message);
}

function getProfile(username) {
    try {
        // Connect to the API URL (https://teamtreehouse.com/username.json)
        const request = https.get("https://teamtreehouse.com/" + username + ".json", response => {
            if (response.statusCode === 200) {
                let body = "";
                // Read the data
                response.on('data', data => {
                    body += data.toString();
                })

                response.on('end', () => {
                    try {
                        // Parse the data
                        const profile = JSON.parse(body);
                        // Print the data
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (error) {
                        console.error(error.message);
                    }
                });
            } else {
                const message = "There was an error getting the profile for " + username + ` (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                console.error(statusCodeError.message);
            }
        });

        request.on('error', error => console.error("Problem with request: " + error.message));
    } catch (error) {
        console.error(error.message);
    }
}

// change the profile name to do differente tests
getProfile("chalkers");