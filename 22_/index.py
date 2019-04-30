def make_counter():
    x = 0
    def counter():
        nonlocal x
        x += 1
        #print (x)
        return x
    return counter

ctr1 = make_counter()
print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())


'''
#CLASSWORK

def inc(x):
    return x+1

f = inc

def adder(a, b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder) #6,8


def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)
print(contains_15([1,2,3,4,5])) #False
print(contains_15([13,14,15,16,17])) #True
print(contains_15(range(1,20))) #True


del outer
#outer(42)
print(contains_15(range(14,20))) #True

To create a closure,
-define nested func
-nested func must refer to var defined in enclosing func
-return nested func



def repeat(string):
    def repeat_specific(num):
        print (string*num)
    return repeat_specific

r1 = repeat("hello")
r1(2)
r2 = repeat("goodbye")
r2(2)
repeat("cool")(3)

def outer():
    x = "foo"
    def inner():
        x = "bar"
    inner()
    return x

print(outer()) #returns foo not bar

def outer_1():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer_1()) #returns bar

'''
