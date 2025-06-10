from dotenv import load_dotenv
load_dotenv()

import os
import gradio as gr
from gtts import gTTS
from pydub import AudioSegment

from farmer_doctor import encode_image, analyze_image_with_query
from chatbot.voice_of_farmer import transcribe_with_groq

# Language-based prompts
farmer_prompt_en = """
You are an experienced agriculture advisor helping a rural farmer. Analyze the image of the plant/crop and listen to their concern. 
Give a short, clear explanation of what the issue might be (e.g., pest, disease, dryness, etc.), and suggest simple steps to fix or manage it.
Avoid scientific jargon or long explanations. Just say what the issue is and what to do. 
Don’t mention you are an AI. Speak naturally like a field expert guiding a real farmer. 
No numbers or special formatting, just a friendly, clear response.
"""

farmer_prompt_hi = """
आप एक अनुभवी कृषि सलाहकार हैं जो एक ग्रामीण किसान की मदद कर रहे हैं। पौधे/फसल की छवि का विश्लेषण करें और उनकी चिंता सुनें।
संक्षेप में, स्पष्ट रूप से बताएं कि समस्या क्या हो सकती है (जैसे कीट, रोग, सूखापन आदि), और उसे ठीक करने या प्रबंधित करने के आसान उपाय सुझाएं।
वैज्ञानिक शब्दों या लंबे विवरण से बचें। बस स्पष्ट, अनौपचारिक भाषा में बताएं कि समस्या क्या है और क्या करना है।
अपने आप को AI कहने से बचें। एक फील्ड एक्सपर्ट की तरह बात करें।
"""

# Text-to-speech
def text_to_speech_with_gtts(text, lang_code="en", output_mp3="output.mp3", output_wav="output.wav"):
    tts = gTTS(text=text, lang=lang_code, slow=False)
    tts.save(output_mp3)
    sound = AudioSegment.from_mp3(output_mp3)
    sound.export(output_wav, format="wav")
    return output_wav

# Core logic
def process_inputs(audio_filepath, image_filepath, language):
    prompt = farmer_prompt_en if language == "English" else farmer_prompt_hi
    lang_code = "en" if language == "English" else "hi"
    
    if audio_filepath:
        speech_text = transcribe_with_groq(
            GROQ_API_KEY=os.environ.get("GROQ_API_KEY"), 
            audio_filepath=audio_filepath,
            stt_model="whisper-large-v3"
        )
    else:
        speech_text = "No audio provided." if language == "English" else "कोई ऑडियो नहीं मिला।"

    if image_filepath:
        response = analyze_image_with_query(
            query=prompt + "\nFarmer's message: " + speech_text, 
            encoded_image=encode_image(image_filepath), 
            model="meta-llama/llama-4-scout-17b-16e-instruct"
        )
    else:
        response = "No plant image provided for analysis." if language == "English" else "पौधे की छवि नहीं दी गई।"

    audio_output = text_to_speech_with_gtts(response, lang_code=lang_code)
    return speech_text, response, audio_output

# Styling (now includes font for Hindi)
css = """
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari&display=swap');
body { background-color: #d9fdd3; }
.gradio-container {
    font-family: 'Segoe UI', 'Noto Sans Devanagari', sans-serif;
}
h1, label, .markdown-text-container {
    color: #205723;
    font-family: 'Segoe UI', 'Noto Sans Devanagari', sans-serif;
}
"""

# Gradio UI with Hindi font and side-by-side layout
with gr.Blocks(css=css) as demo:
    gr.Markdown("## 🌾 **BHOOMI AI (Vision and Voice)** – खेत का डॉक्टर अब आपकी जेब में")

    with gr.Row():
        with gr.Column(scale=1):
            gr.Markdown("### 📥 इनपुट / Input")
            language = gr.Dropdown(["English", "Hindi"], value="English", label="🌐 Select Language / भाषा चुनें")
            audio_input = gr.Audio(sources=["microphone"], type="filepath", label="🎙️ Speak your crop issue / अपनी समस्या बोलें")
            image_input = gr.Image(type="filepath", label="🌿 Upload plant image / पौधे की छवि अपलोड करें")
            submit = gr.Button("🧠 Analyze / विश्लेषण करें")

        with gr.Column(scale=1):
            gr.Markdown("### 📤 परिणाम / Output")
            transcribed_text = gr.Textbox(label="🗣️ Transcription of Farmer's Voice / आवाज़ की लिखावट")
            advice_text = gr.Textbox(label="🌿 Farming Advice / कृषि सलाह")
            spoken_audio = gr.Audio(label="🔊 Spoken Advice / बोले गए सुझाव", type="filepath")

    submit.click(
        process_inputs, 
        inputs=[audio_input, image_input, language], 
        outputs=[transcribed_text, advice_text, spoken_audio]
    )

demo.launch(debug=True)
