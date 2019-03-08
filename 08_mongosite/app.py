#Pearl -- Karen Li, Amit Narang, Kyle Tau
#SoftDev2 pd6
#K08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-02

import os, pymongo, json

from flask import Flask, render_template, request

app = Flask(__name__)

app.secret_key = os.urandom(32)

SERVER_ADDR="142.93.206.119"
connection=pymongo.MongoClient(SERVER_ADDR)
connection.drop_database("HeartGold")
db = connection.HeartGold
collection = db.pokemon

f = open("data/pokedex.json")
data = json.load(f)
collection.insert_many(data["pokemon"])

@app.route("/", methods=["POST", "GET"])
def home():
    return render_template("index.html")

@app.route("/poke_info", methods=["POST", "GET"])
def poke_info():
    poke_name = request.args["poke_name"]
    poke_dict = collection.find_one({"name": poke_name})
    if poke_dict is None:
        poke_dict = {}
    length = len(poke_dict)
    return render_template("pokemon.html",  temp_name = poke_name, length = length, **poke_dict)

#idk if this works; need to test in class
@app.route("/ip", methods=["POST", "GET"])
def change_ip():
    global SERVER_ADDR
    ip = request.args["ip_address"]
    print(SERVER_ADDR)

    SERVER_ADDR= ip
    connection=pymongo.MongoClient(SERVER_ADDR)
    connection.drop_database("HeartGold")
    db = connection.HeartGold
    collection = db.pokemon
    
    f = open("data/pokedex.json")
    data = json.load(f)
    collection.insert_many(data["pokemon"])
    
    print(SERVER_ADDR)
    return render_template("change_ip.html", ip = ip)

if __name__ == "__main__":
    app.debug = True #change to False before our demo
    app.run()
    #app.run("0.0.0.0")
