const{ YoutubeTranscript } = require( 'youtube-transcript');

async function getTranscript(URL) {

let transcript = await YoutubeTranscript.fetchTranscript(URL)
return transcript

}


module.exports = getTranscript