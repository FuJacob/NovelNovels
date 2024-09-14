// Use import statements instead of require
import express from 'express';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import fetch from 'node-fetch';
import fs from 'fs';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';

const app = express();
const port = 3000;

// File upload configuration
const upload = multer({ dest: 'uploads/' });

app.post('/process-pdf', upload.single('pdf'), async (req, res) => {
    try {
        const { style, frequency } = req.body;
        const pdfPath = req.file.path;
        const pdfData = fs.readFileSync(pdfPath);
        const pdfText = await pdfParse(pdfData);
        const sortedText = sortText(pdfText.text, frequency);
        const images = await generateImages(sortedText, style);
        const checkedText = await groqCheck(sortedText);
        const voiceover = await generateVoiceover(checkedText);
        const soundEffects = generateSoundEffects(images);

        res.json({ pages: formatBookData(checkedText, images, voiceover, soundEffects) });
    } catch (error) {
        console.error('Error processing PDF:', error);
        res.status(500).send('Error processing PDF');
    }
});

function sortText(text, frequency) {
    const sentences = text.split(/(?<=[.!?])\s+/);
    const sorted = [];
    for (let i = 0; i < sentences.length; i += frequency) {
        sorted.push(sentences.slice(i, i + frequency).join(' '));
    }
    return sorted;
}

async function generateImages(textSegments, style) {
    const images = [];
    for (const text of textSegments) {
        const response = await fetch('https://api.stablediffusion.com/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: text, style })
        });
        const image = await response.json();
        images.push(image.url); // Adjust this line based on API response
    }
    return images;
}

async function groqCheck(textSegments) {
    const checkedSegments = [];
    for (const text of textSegments) {
        const response = await fetch('https://api.groq.com/grammar-check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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` // Groq API Key
            },
            body: JSON.stringify({ text })
        });
        const result = await response.json();
        checkedSegments.push(result.correctedText); // Adjust based on API response
    }
    return checkedSegments;
}

async function generateVoiceover(textSegments) {
    const ttsClient = new TextToSpeechClient();
    const voiceoverPaths = [];
    for (const text of textSegments) {
        const [response] = await ttsClient.synthesizeSpeech({
            input: { text },
            voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
            audioConfig: { audioEncoding: 'MP3' },
        });
        const audioPath = `audio-${Date.now()}.mp3`;
        fs.writeFileSync(audioPath, response.audioContent, 'binary');
        voiceoverPaths.push(audioPath);
    }
    return voiceoverPaths;
}

function generateSoundEffects(images) {
    // Placeholder logic for generating sound effects; this can be expanded with actual sound effect generation
    return images.map(() => 'sound-effect.mp3'); // Placeholder sound effect paths
}

function formatBookData(text, images, voiceover, soundEffects) {
    return text.map((text, index) => ({
        image: images[index],
        text,
        voiceover: voiceover[index],
        soundEffect: soundEffects[index],
    }));
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
