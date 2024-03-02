const { v4: uuidv4 } = require('uuid');


  async function tts(text, link) {
    let outputId = uuidv4();
  const https = require("https");
const fs = require("fs");

const url = "https://api.deepgram.com/v1/speak?model=aura-asteria-en";

// Set your Deepgram API key
const apiKey = process.env.DEEPGRAM_API;

// Define the payload
const data = JSON.stringify({
  text: text,
});

// Define the options for the HTTP request
const options = {
  method: "POST",
  headers: {
    Authorization: `Token ${apiKey}`,
    "Content-Type": "application/json",
  },
};


// Make the POST request
const req = https.request(url, options, (res) => {

  // Check if the response is successful
  if (res.statusCode !== 200) {
    console.error(`HTTP error! Status: ${res.statusCode}`);
    return;
  }
  // Save the response content to a file
  const dest = fs.createWriteStream(`./public/${outputId}.mp3`);
  res.pipe(dest);
  dest.on("finish", () => {
    console.log("File saved successfully.");
  });
});

// Handle potential errors
req.on("error", (error) => {
  console.error("Error:", error);
});

// Send the request with the payload
req.write(data);
req.end();
return `${outputId}.mp3`
}

module.exports = tts