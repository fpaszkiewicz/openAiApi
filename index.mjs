import OpenAI from "openai";
import fs from "node:fs";

const key = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
    apiKey: key
});


const readFileAndProcess = async () => {
    try {
      const data = await fs.promises.readFile('./tresc-artykulu.txt', 'utf8');
      await processText(data);
    } catch (err) {
      console.error('Error reading file:', err);
    }
};

const processText = async (data) => {
    try {
        const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
            role: "system",
            content: "Convert the provided text into an HTML article. Do not include CSS or JavaScript, and do not create <html>, <body>, or <head> tags. Use <img> tags to indicate where images should be placed, with the src attribute set to 'image_placeholder.jpg'. Each <img> tag should also include an alt attribute with a detailed description in English, outlining the exact image prompt for generation."
            },
            {
            role: "user",
            content: data,
            },
        ],
        });
        // console.log(completion.choices[0].message.content);
        fs.writeFile("./artykul.html", completion.choices[0].message.content, (err) =>{
            if(err) throw err;
        })
    } catch (err) {
        console.error('Error with OpenAI API:', err);
    }
    };
    
    readFileAndProcess();
