def triples(n):
    return [(a,b,c) for a in range(1,n+1) for b in range(a,n+1) for c in range(b,n+1) if a**2 + b**2 == c**2]

print(triples(20))

def quick_sort(list):
    if len(list)==0:
        return list
    else:
        pivot = list[0]
        return quick_sort([x for x in list[1:] if x < pivot]) + [pivot] + quick_sort([x for x in list[1:] if x >= pivot])

print(quick_sort([1,5,7,8,9,10,0,2,4,3,6]))
