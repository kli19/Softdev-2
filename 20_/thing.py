from functools import reduce

product = reduce((lambda x, y: x* y), [1,2,3,4])
print(product)
f = open("ulysses.txt", "r")
text=[x.replace("\r\n","") for x in f.read()]
data = [x.replace("\r\n","") for x in f.read().split(" ")]
print(text)
sample=["product","reduce","lambda","functools","open","open"]
def freq(word):
    count=[1 if x == word else 0 for x in data]
    return reduce((lambda x,y: x+y),count)
print(freq("the"))

#def freq_group(word):
    
    
