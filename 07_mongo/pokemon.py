#HeartGold -- Karen Li, Thomas Lee
#SoftDev2 pd6
#K07 -- Import/Export Bank
#2019-03-02

import pymongo, json

SERVER_ADDR="142.93.206.119"
connection=pymongo.MongoClient(SERVER_ADDR)
connection.drop_database("HeartGold")
db = connection.HeartGold
collection = db.pokemon

f = open("pokedex.json")
data = json.load(f)
collection.insert_many(data["pokemon"])

def find_id(pokemon_id):
    return collection.find({"id": pokemon_id})

def find_name(name):
    return collection.find({"name": name})
