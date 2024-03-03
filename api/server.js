const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv').config()
const OpenAI = require("openai")
const getAudio =  require("./utils/getAudio")
const tts = require("./utils/textToSpeech")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
app.use(express.static(__dirname+'/public'))

app.use(express.json())
app.use(cors())

app.post("/", async (req,res)=> {
    const {youtube, summarizeOnly} = req.body
    if (!youtube) {
        res.status(404).json("Youtube Link Missing")
    }
    const data = await getAudio(youtube)
    let transcript = ""
    data.forEach(item=> transcript+=item.text+" ")

    try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `Summarize the following Video Transcript in detail for audiobook, there should be around 1900 characters in the summary, Here's the transcript: ${transcript}`
 
    const result = await model.generateContent(prompt); 
    const response = await result.response;
    const text = response.text(); 
    if (summarizeOnly) {
        res.json({summary: text})
    }
    console.log(text);
    let output = await tts(text, youtube)
    res.json(output) }
    catch(e) {
      console.log(e)
      res.json("Error Occured, Please Contact Team ETH.Magnus")
    }
})



app.listen(process.env.PORT || 4000, ()=> {
    console.log("Server Started!")
})


