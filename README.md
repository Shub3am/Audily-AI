## <img src="https://github.com/Builders-Valley/Audily-AI/assets/74038190/219665a0-6cec-41f5-9350-f5e2366e0d60"  width="25" /> Audily

> Problem.

The problem category is `Social Media and Communication`. A huge number of videos on YouTube are very long, and most of them are not very to the point, which doesn't make it worthwhile to watch every second of the video. There are other use cases, but let's proceed to the solution to understand it better.

> Our Solution.

We have created Audily, where you can paste the YouTube URL of any video, and it will provide two simple options:

1. Text Summarizer: The video will be summarized, and you will receive text with optimal UX.
2. Audio Summarizer: You will receive an audiobook that you can play to listen anywhere and with your own device.

It will be helpful for someone who wants to hear the video in a short span of time on the go. We have utilized Amazon's ML model and are using specialized models to improve accuracy and tone, mimicking human speech.

## Videos

[![Audily AI](https://img.youtube.com/vi/94uvTs6mTg4/0.jpg)](https://www.youtube.com/watch?v=94uvTs6mTg4)



## :fire: Deployed Link ##

The frontend is hosted on [Vercel Platform](https://vercel.com/). Visit the following link to view the web application.

```
https://audily-ai.vercel.app/
```

The backend is hosted on vercel functions. Visit the following link to view the web application.


<hr>

## 🌐 Setup Local Environment

For that, you need to create a `.env.local` in `web` directory in your project, as shown in the [docs](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables). The file should look like this:

```
NEXT_PUBLIC_API_URL = "GET FROM GOOGLE CLOUD GEMINI AI"
NEXT_PUBLIC_CLOUD_URL="GET FROM GOOGLE APP ENGINE"
```

You also need to setup a few API keys for this project to be setup correctly otherwise you won't be able to properly work on this project

- [Deepgram Speech to Text](https://deepgram.com/product/speech-to-text)
- [Google API Key](https://console.cloud.google.com/apis/library?pli=1)

```
DEEPGRAM_API=<value>
GOOGLE_API_KEY=<value>
```

You can retrieve the above environment values by referring to their documentation linked above. Once retrieved, paste them accordingly as mentioned above.

## ✅ Guidelines to run web app locally

- For this app to work, Use these commands to run the application

> Go to `web` directory. 

```bash
# to install dependencies 
npm install

# to run the development server
npm run dev
```

- Open `http://localhost:3000` with your browser to see the application.

<br>

> Go to `api` directory. 

```bash
# to install dependencies 
npm install

# to run the development server
npm start
```

- This will get your backend server started.

<hr>

## <img src="https://user-images.githubusercontent.com/74038190/221857984-5bf77e81-6f65-4502-a7c8-f29a978efb3f.png" alt="bullseye" width="35" /> Frameworks & Tools
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/googlegemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" />
<img src="https://img.shields.io/badge/deepgram-13EF93?style=for-the-badge&logo=deepgram&logoColor=white" />
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

## 📂 Codebase Structure

A quick look at the structure of the codebase.

```
.

└── api
└── web
    └── components
        └───icons.tsx
        └───home-page
        └───ui
    └── lib
        └───fonts.ts
        └───utils.ts
    └── src/app
        └───layout.tsx
        └───page.tsx
    └── public
        └───assets
        └───assets
    └── styles
        └──globals.css

```

# Team ETH.MAGNUS

<table>
<td align="center" width="200"><pre><a href="https://github.com/shub3am"><img src="https://avatars.githubusercontent.com/u/77344771?v=4" width="200" alt="GitHub Profile of Shubham" /><br><sub>Shubham</sub></a><br>@shub3am</pre></td>
<td align="center" width="200"><pre><a href="https://github.com/rupali-codes"><img src="https://avatars.githubusercontent.com/u/78981177?v=4" width="200" alt="GitHub Profile picture of Rupali Haldiya" /><br><sub>Rupali Haldiya</sub></a><br>@rupali-codes</pre></td>
<td align="center" width="200"><pre><a href="https://github.com/Anmol-Baranwal"><img src="https://avatars.githubusercontent.com/u/74038190?v=4" width="200" alt="GitHub Profile of Anmol Baranwal" /><br><sub>Anmol Baranwal</sub></a><br>@Anmol-Baranwal</pre></td>
</table>
