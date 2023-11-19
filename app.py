from flask import Flask, render_template, request, jsonify

import openai  

import os

openai.api_key = "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"

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('chat.html')
@app.route("/get", methods=["POST"])

def chat():
    try:
        msg = request.form["msg"]
        input_message = {'role': 'user', 'content': msg}
        chat_messages = [{'role': 'system', 'content': 'You are a helpful assistant.'}, input_message]

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=chat_messages,
            max_tokens=100,
        )

        output_message = response['choices'][0]['message']['content']
        return jsonify({'response': output_message})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)



'''
def chat():
    try:
        msg = request.form["msg"]
        input = msg
        chat_messages = [{'role': 'system', 'content': 'You are a helpful  assistant.'}, {'role': 'user', 'content': input}]
        return get_openai_response(chat_messages)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
def get_openai_response(messages):
    response = openai.ChatCompletions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=100,
    )
    print(response.choices[0].message.content)
    print(response)
    return response['choices'][0]['message']['content']
    print(get_openai_response("Hello"))  # استدعاء الوظيفة للحصول على رد



if __name__ == '__main__':
    app.run(debug=True)
    '''