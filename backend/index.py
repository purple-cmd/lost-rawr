from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route("/pets/mock")
def getPetsMock():
    offset = request.args.get('offset', default=10, type=int)
    page_size = request.args.get('pageSize', default=0, type=int)
    limit = offset + page_size

    with open('pets.json') as file:
        data = json.load(file)
    
    return jsonify(data[offset:limit])
