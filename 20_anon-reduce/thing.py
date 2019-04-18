from functools import reduce

f = open("ulysses.txt", "r")
data = [x.replace("\r\n","") for x in f.read().split(" ")]
#print(data)
#text=[x.replace("\r\n","") for x in f.read()]

def freq(word):
    count = [1 if x == word else 0 for x in data]
    return reduce((lambda x, y: x + y),count)
print(freq("the"))

def freq_group(words):
    count = [1 if x in words else 0 for x in data ]
    return reduce((lambda x, y: x + y), count)
print(freq_group(["and"]))
print(freq_group(["the", "and"]))
    
def freq_most():
    count = [(x, freq(x)) for x in data]
    return reduce((lambda x, y: x if x[1] > y[1] else y), count)
print(freq_most())
