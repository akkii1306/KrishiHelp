# from dotenv import load_dotenv
# load_dotenv()

import os
import gradio as gr
from gtts import gTTS
from pydub import AudioSegment

from farmer_doctor import encode_image, analyze_image_with_query
from voice_of_farmer import transcribe_with_groq

farmer_prompt = """
You are an experienced agriculture advisor helping a rural farmer. Analyze the image of the plant/crop and listen to their concern. 
Give a short, clear explanation of what the issue might be (e.g., pest, disease, dryness, etc.), and suggest simple steps to fix or manage it.
Avoid scientific jargon or long explanations. Just say what the issue is and what to do. 
Don’t mention you are an AI. Speak naturally like a field expert guiding a real farmer. 
No numbers or special formatting, just a friendly, clear response.
"""

def text_to_speech_with_gtts(text, output_mp3="output.mp3", output_wav="output.wav"):
    tts = gTTS(text=text, lang="en", slow=False)
    tts.save(output_mp3)
    sound = AudioSegment.from_mp3(output_mp3)
    sound.export(output_wav, format="wav")
    return output_wav

def process_inputs(audio_filepath, image_filepath, text_input):
    # 1. Transcribe if audio is provided and text is empty
    if text_input:
        speech_to_text_output = text_input.strip()
    elif audio_filepath:
        speech_to_text_output = transcribe_with_groq(
            GROQ_API_KEY=os.environ.get("GROQ_API_KEY"),
            audio_filepath=audio_filepath,
            stt_model="whisper-large-v3"
        )
    else:
        speech_to_text_output = "No message provided."

    # 2. Analyze image if provided
    if image_filepath:
        farmer_response = analyze_image_with_query(
            query=farmer_prompt + "\nFarmer's message: " + speech_to_text_output,
            encoded_image=encode_image(image_filepath),
            model="meta-llama/llama-4-scout-17b-16e-instruct"
        )
    else:
        farmer_response = "No plant image provided for analysis."

    # 3. Text-to-speech
    audio_output_path = text_to_speech_with_gtts(
        farmer_response, output_mp3="final.mp3", output_wav="final.wav"
    )

    return speech_to_text_output, farmer_response, audio_output_path

iface = gr.Interface(
    fn=process_inputs,
    inputs=[
        gr.Audio(sources=["microphone"], type="filepath", label="🎤 Speak your concern (optional)"),
        gr.Image(type="filepath", label="🌱 Upload plant image (optional)"),
        gr.Textbox(label="📝 Or type your concern (optional)")
    ],
    outputs=[
        gr.Textbox(label="🗣️ Transcription / Text Input"),
        gr.Textbox(label="🌿 Farming Advice"),
        gr.Audio(label="🔊 Spoken Advice", type="filepath")
    ],
    title="AI Agriculture Advisor with Vision, Voice, and Text",
    description="Upload a plant image, speak your concern, or type it — and get expert farming advice in text and audio!"
)

iface.launch(debug=True)
