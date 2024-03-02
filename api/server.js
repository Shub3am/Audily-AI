const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv').config()
const OpenAI = require("openai")
const getAudio =  require("./utils/getAudio")
const {VertexAI} = require('@google-cloud/vertexai');
const tts = require("./utils/textToSpeech")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
app.use(express.static('public'))
const project = 'essential-flame-416009';
const location = 'asia-south1';
const textModel =  'text-bison';

const vertex_ai = new VertexAI({project: project, location: location});
app.use(express.json())
app.use(cors())
const generativeModel = vertex_ai.getGenerativeModel({
    model: textModel,
  });

app.post("/", async (req,res)=> {
    const {youtube} = req.body
    if (!youtube) {
        res.status(404).json("Youtube Link Missing")
    }
    const data = await getAudio(youtube)
    let transcript = ""
    data.forEach(item=> transcript+=item.text+" ")
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    

    const prompt = `Summarize the following Video Transcript in detail, Here's the transcript: ${transcript}`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    let output = await tts(text, youtube)
    res.json(output)
    
    
    
    // res.json(para)
    


    
})



app.listen(4000, ()=> {
    console.log("Server Started On Port: 4000")
})


