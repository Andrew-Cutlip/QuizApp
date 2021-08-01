from flask import Flask
from flask import render_template, send_file, request, redirect
from db import usernameCheck, matchPassword
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
    if request.method == "GET":
        return send_file("static/login.html")
    elif request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        usernameIn = usernameCheck(username)
        passMatch = matchPassword(username, password)
        if usernameIn and passMatch:
            #successfully logged in
            return redirect("/")
        # send errors
        else:
            error = "Invalid Username and/or Password"
            return error

def checkPassword(password: str):
    errors = {
        "length": False,
        "capital": False,
        "number": False,
        "letter": False,
        "special": False
    }
    if len(password) >= 8:
        errors["length"] = True
    special = "!@#?%^*"
    for char in password:
        if char.isdigit():
            errors["number"] = True
        elif char.isalpha():
            errors["letter"] = True
        if char.isupper():
            errors["capital"] = True
        if char in special:
            errors["special"] = True
        return errors



@app.route("sign-up")
def sign_up():
    # Send form for get request
    if request.method == "GET":
        return send_file("static/signUp.html")
    elif request.method == "POST":
        #Check if valid username / password
        username = request.form["username"]
        password = request.form["password"]
        # check password validity
        errors = checkPassword(password)
        # see if already in db
        usernameFree = usernameCheck(username)
        if not usernameFree:
            errors["username"] = True
        if all(errors.values):
            #passed all requirements
            # add to db
            # send to account screen
            return ""
        else:
            #send out dict of errors
            return errors