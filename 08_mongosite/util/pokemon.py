#Pearl -- Karen Li, Amit Narang, Kyle Tau
#SoftDev2 pd6
#K08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-02

'''
The Pokedex dataset conatins information about all 151 of the Generation I Pokemon including ID, name, type, weaknesses, spawn chance, and more"
Link: https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

Import mechanism:
If the db is already in the server, it is dropped to prevent duplicates. A new db HeartGold and new collection pokemon is created. Because the dataset is in the form of a JSON file, it can easily be loaded as a python list of dictionaries and inserted into the collection with the insert_many function.
'''

import pymongo, json

SERVER_ADDR="142.93.206.119"
connection=pymongo.MongoClient(SERVER_ADDR)
connection.drop_database("HeartGold")
db = connection.HeartGold
collection = db.pokemon

f = open("data/pokedex.json")
data = json.load(f)
collection.insert_many(data["pokemon"])

def find_id(pokemon_id):
    return collection.find({"id": pokemon_id})

def find_name(name):
    return collection.find_one({"name": name})


def find_type(pokemon_type):
    return collection.find({"type": pokemon_type})

def find_weakness(weakness):
    return collection.find({"weaknesses": weakness})

def find_type_weakness(pokemon_type, weakness):
    return collection.find({"$and":[{"type": pokemon_type}, {"weaknesses": weakness}]}) 

def find_spawn(spawn_chance):
    return collection.find({"spawn_chance":{"$gt" : spawn_chance}})

def find_type_spawn(pokemon_type, spawn_chance):
    return collection.find({"$and":[{"type": pokemon_type}, {"spawn_chance": {"$gt" : spawn_chance}}]}) 

def display_pokemon(pokemons):
    for pokemon in pokemons:
        print (pokemon["name"])
        #print(pokemon)

"""
print("=====POKEMON WITH ID 1=====")
display_pokemon(find_id(1))

print("=====POKEMON WITH NAME Jigglypuff=====")
display_pokemon(find_name("Jigglypuff"))

print("=====POKEMON WITH TYPE GRASS=====")
display_pokemon(find_type("Grass"))

print("=====POKEMON WITH WEAKNESS WATER=====")
display_pokemon(find_weakness("Water"))

print("=====POKEMON WITH TYPE DRAGON AND WEAKNESS DRAGON=====")
display_pokemon(find_type_weakness("Dragon", "Dragon"))

print("=====POKEMON WITH SPAWN CHANCE GREATER THAN .9=====")
display_pokemon(find_spawn(.9))

print("=====POKEMON WITH TYPE ICE AND SPAWN CHANCE GREATER THAN .1=====")
display_pokemon(find_type_spawn("Ice", .1))
"""
