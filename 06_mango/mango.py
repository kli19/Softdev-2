#AlphaSapphire -- Karen Li, Kyle Tau
#SoftDev2 pd6
#K06 -- Yummy Mango Py
#2019-02-28

import pymongo

SERVER_ADDR="142.93.206.119"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection = db.restaurants

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

#All restaurants in a specified zip code.
def get_zipcode(zipcode):
    return collection.find( {'address.zipcode': zipcode} )

#All restaurants in a specified zip code and with a specified grade.
def get_zip_grade(zipcode, grade):
    return collection.find( {'address.zipcode': zipcode, 'grades.grade': grade} )

def display_restaurants(collection):
    for i in collection:
        #print (i['name'])
        print(i)

print ("-----RESTAURANTS IN QUEENS-----\n")
#display_restaurants(get_borough("Queens"))

print ("-----RESTAURANTS IN 10282----\n")
#display_restaurants(get_zipcode("10282"))

print ("-----RESTAURANTS IN 10282 WITH GRADE A----\n")
#display_restaurants(get_zip_grade("10282", "A"))







