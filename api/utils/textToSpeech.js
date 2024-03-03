const { v4: uuidv4 } = require('uuid');
const https = require("https");
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();


async function uploadFile(fileName, filePath) {
  const options = {
    destination: fileName,

  };

  await storage.bucket(process.env.GCLOUD_STORAGE_BUCKET).upload(filePath, options);
  console.log(`${filePath} uploaded to ${process.env.GCLOUD_STORAGE_BUCKET}`);
  console.log("File Uploaded!")
  fs.unlinkSync(filePath)
  return fileName;
}
  async function tts(text, link, callback) {

    let outputId = uuidv4();


const url = "https://api.deepgram.com/v1/speak?model=aura-asteria-en";


const apiKey = process.env.DEEPGRAM_API;


const data = JSON.stringify({
  text: text,
});


const options = {
  method: "POST",
  headers: {
    Authorization: `Token ${apiKey}`,
    "Content-Type": "application/json",
  },
};



const req = https.request(url, options, (res) => {


  if (res.statusCode !== 200) {
    console.error(`HTTP error! Status: ${res.statusCode}`);
    return;
  }


  const dest = fs.createWriteStream(`/tmp/${outputId}.mp3`);
  res.pipe(dest);
  dest.on("finish", async () => {
    console.log("File saved successfully.");
    let fileInfo = await uploadFile(outputId, `/tmp/${outputId}.mp3`)

    callback(fileInfo)
  });
});


req.on("error", (error) => {
  console.error("Error:", error);
});


req.write(data);

req.end();

}

module.exports = tts