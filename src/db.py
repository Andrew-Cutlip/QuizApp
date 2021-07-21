import pymongo
from pymongo import MongoClient
client = MongoClient()
db = client.db
users = db.users
ids = db.ids


def getNextId():
    u_id = ids.find_one()
    num = 0
    if u_id != None:
        num = u_id["id"]
    next_id = num + 1
    ids.update_one({}, {"$set": {"id": next_id}})
    return num

# returns true on success and false on failure
def addUser(username: str, password: str):
    #Want to hash and salt password
    u_id = getNextId()
    hash_pass =  password
    user = {
        id : u_id,
        username: username,
        password: hash_pass
    }
    return True

# Checks if username is in db
def usernameCheck(username: str):
    user = users.find_one({"username": username})
    if user == None:
        return False
    return True

#Checks if password is same as hashed password
def checkPassword(username: str, password: str):
    return False