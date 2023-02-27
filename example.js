const { sign } = require("./X-Bogus.js");

// Replace the empty strings with valid values
const url = "";
const userAgent = "";

const query = url.includes("?") ? url.split("?")[1] : "";
const xbogus = sign(query, userAgent);
const newUrl = url + "&X-Bogus=" + xbogus;
console.log(newUrl);
