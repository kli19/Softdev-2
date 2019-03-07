#Pearl -- Karen Li, Amit Narang, Kyle Tau
#SoftDev2 pd6
#K08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-02

import os

from flask import Flask, render_template, request
from util import pokemon

app = Flask(__name__)

app.secret_key = os.urandom(32)

@app.route("/", methods=["POST", "GET"])
def ip_page():
    return render_template("index.html")

@app.route("/poke_info", methods=["POST", "GET"])
def poke_info():
    poke_name = request.args["poke_name"]
    poke_dict = pokemon.find_name(poke_name)
    if poke_dict is None:
        poke_dict = {}
    length = len(poke_dict)
    return render_template("pokemon.html",  temp_name = poke_name, length = length, **poke_dict)

if __name__ == "__main__":
    app.debug = True #change to False before our demo
    app.run()
