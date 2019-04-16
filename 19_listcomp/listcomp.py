'''
Karen Li
SoftDev3 pd6
K#19 -- Ready, Set, Math!
2019-04-16
'''

def union(A, B):
    return A + [x for x in B if x not in A]
print(union([1,2,3], [2,3,4]))

def intersection(A, B):
    return [x for x in A if x in B]
print(intersection([1,2,3], [2,3,4]))

def set_difference(U, A):
    return [x for x in U if x not in A]
print(set_difference([1,2,3], [2,3,4]))

def symmetric_difference(A, B):
    return [x for x in A if x not in B] + [x for x in B if x not in A]
print(symmetric_difference([1,2,3], [2,3,4]))

def cartesian_product(A, B):
    return [(a,b) for a in A for b in B]
print(cartesian_product([1,2],["red", "white"]))
