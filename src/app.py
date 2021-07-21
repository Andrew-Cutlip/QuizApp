from flask import Flask
from flask import render_template, send_file
app = Flask(__name__)
@app.route("/")
def home():
    # Want to send to start page by default
    return send_file("static/start.html")
    # Later if logged-in will show different screen

# Creation of new quiz
@app.route("/new")
def new():
    #Might want to save session to return to in progress quiz
    return send_file("static/newQuiz.html")

@app.route("/login")
def login():
    # send to login form for get request
    # do authentication for post request
    return send_file("static/login.html")

@app.route("sign-up")
def sign_up():
    #Check if valid username / password
    return send_file("static/signUp.html")