import random

def make_HTML_heading(f):
    def inner():
        return "<h1>" + f() + "</h1>"
    return inner

#equivalent to make_HTML_heading(greet)
@make_HTML_heading 
def greet():
    greetings = ["Hello", "Welcome", "AYO!", "Hola", "Bonjour", "Word up"]
    return random.choice(greetings)

#print(greet())

def memoize(f):
    memo = {}
    def helper(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper

#equivalent to memoize(fib)
@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(1))
print(fib(2))
print(fib(3))
print(fib(4))
print(fib(40))
