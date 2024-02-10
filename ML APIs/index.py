from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

def analyze_sentiment(sentence):
    analysis = TextBlob(sentence)
    if analysis.sentiment.polarity > 0:
        return 1
    elif analysis.sentiment.polarity == 0:
        return 0
    else:
        return -1

@app.route('/analyze', methods=['POST'])
def analyze():
    if request.method == 'POST':
        data = request.get_json()
        sentences = data.get('sentences', [])
        total_score = sum(analyze_sentiment(sentence) for sentence in sentences)
        return jsonify({'total_score': total_score})
    
@app.route('/sentiment', methods=['PUT'])
def sentiment():
    if request.method == 'PUT':
        data = request.get_json()
        sentence = data.get('sentence')
        score = analyze_sentiment(sentence)
        return jsonify({'score': score})

if __name__ == '__main__':
    app.run(debug=True)
