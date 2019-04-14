# Karen Li
# Softdev2 pd6
# K16 -- Do You Even List?
# 2019-04-14

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = [x for x in "abcdefghijklmnopqrstuvwxyz"]
numbers = "0123456789"
special = ".?!&#,;:-_*"

'''
Write a function that uses list comprehension to return whether a password meets a minimum threshold: it contains a mixture of upper- and lowercase letters, and at least one number
'''
def minT(password):
    check = [1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in numbers else 0 for x in password]
    return 1 in check and 2 in check and 3 in check

'''
Write a function that uses list comprehension to return a password's strength rating. This function should return a lower integer for a weak password and a higher integer for a stronger password. (Suggested scale: 1-10) Consider these criteria:
'''
def pass_strength(password):
    check = [1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in numbers else 4 if x in special else 0 for x in password]
    return sum(set(check))

print(minT("123"))
print(minT("Abc123*"))
print(pass_strength("123"))
print(pass_strength("Abc123*"))
