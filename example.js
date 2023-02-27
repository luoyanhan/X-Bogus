const { sign } = require("./X-Bogus.js");

// Replace the empty strings with valid values
const url = "";
const userAgent = "";

// Extract the query string from the URL
const query = url.includes("?") ? url.split("?")[1] : "";

// Generate the X-Bogus value
const xbogus = sign(query, userAgent);

// Add the X-Bogus value to the URL
const newUrl = url + "&X-Bogus=" + xbogus;

// Output the new URL to the console
console.log(newUrl);
