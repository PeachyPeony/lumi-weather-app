const fs = require("fs");

const config = `const apiKey = "${process.env.OPENWEATHER_API_KEY}";`;

fs.writeFileSync("config.js", config);

console.log("config.js created");