from flask import Flask
from flask import render_template, send_file
app = Flask(__name__)
@app.route("/")
def home():
    return send_file("static/index.html")
