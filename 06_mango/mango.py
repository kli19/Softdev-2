#AlphaSapphire -- Karen Li, Kyle Tau
#SoftDev2 pd6
#K06 -- Yummy Mango Py
#2019-02-28

import pymongo

SERVER_ADDR="142.93.206.119"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection = db.restaurants

#All restaurants in a specified borough.
def get_borough(borough):
    return collection.find( {'borough': borough} )

def display_restaurants(collection):
    for i in collection:
        #print (i['name'])
        print(i)

print ("-----RESTAURANTS IN QUEENS-----\n")
#display_restaurants(get_borough("Queens"))



