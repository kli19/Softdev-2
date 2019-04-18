'''
Ppushu_Ppushu: Karen Li, Mohammed Jamil
SoftDev3 pd6
K#20 -- Reductio ad Absurdum
2019-04-17
'''

from functools import reduce

f = open("ulysses.txt", "r")
data = f.read().split()
#data = ["hi", "the", "the", "and"]
#print(data)

def freq(word):
    count = [1 if x == word else 0 for x in data]
    return reduce((lambda x, y: x + y),count)
#print(freq("the"))

def freq_group(words):
    num = 1 + words.count(" ")
    count = [1 if reduce((lambda x, y: x + " " + y), data[i: i+num]) == words else 0 for i in range(0, len(data)) ]
    return reduce((lambda x, y: x + y), count)
#print(freq_group("he and"))

    
def freq_most():
    words = set(data)
    count = [(x, freq(x)) for x in words]
    return reduce((lambda x, y: x if x[1] > y[1] else y), count)
#print(freq_most())
