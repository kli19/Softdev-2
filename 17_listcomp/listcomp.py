# Karen Li
# Softdev2 pd6
# K17 -- PPFTLCW
# 2019-04-14


#['00', '22', '44', '66', '88'] 

loopy1 = []
for num in range(10):
    if num%2 == 0:
        loopy1.append(str(num)*2)
print(loopy1)

listcompy1 = [str(x)*2 for x in range(10) if x%2 == 0]
print(listcompy1)

 
#[7, 17, 27, 37, 47]

loopy2 = []
for num in range(5):
    loopy2.append(7+num*10)
print(loopy2)

listcompy2 = [7+10*x for x in range(5)]
print(listcompy2)

#[0, 0, 0, 0, 1, 2, 0, 2, 4]

loopy3 = []
nums = "012"
for num1 in nums:
    for num2 in nums:
        loopy3.append(int(num1)*int(num2))
print(loopy3)

listcompy3 = [int(x)*int(y) for x in nums for y in nums]
print (listcompy3)

#Composites on range [0,100], in ascending order.

loopy4 = []
for num in range(2,101):  
    i = 2
    while i*i <=num:
        if num % i == 0:
            loopy4.append(num)
            break
        i+=1
print(loopy4)

listcompy4 =[x for x in range (2, 101) if 0 in [ x % i for i in range (2,x)]]
print(listcompy4)

#Primes on range [0,100], in ascending order.
loopy5= []
for num in range(2,101):
    is_prime = True
    for i in range(2,num):
        if (num%i==0):
            is_prime = False
    if is_prime:
       loopy5.append(num)
print(loopy5)

listcompy5 = [x for x in range (2,101) if all(x%y != 0 for y in range (2,x))]
print(listcompy5)

#All divisors of a number, listed in ascending order.
def divisor_loopy(num):
    loopy6 = []
    for i in range(1,num+1):
        if num % i == 0:
            loopy6.append(i)
    return loopy6
print(divisor_loopy(20))

def divisor_listcompy(num):
    listcompy6 = [x for x in range(1,num+1) if num%x == 0]
    return listcompy6
print(divisor_listcompy(20))


#Transpose a matrix (turn rows into columns and vice-versa...)
def matrix_loopy(matrix):
    print(matrix)
    loopy7 = []
    for i in range(len(matrix[0])):
        #print("i is: " + str(i))
        temp = []
        for j in range(len(matrix)):
            #print("j is: " + str(j))
            temp.append(matrix[j][i])
        loopy7.append(temp)
    return loopy7
print(matrix_loopy([[1,2,3,0],[4,5,6,0],[7,8,9,0]]))


def matrix_listcompy(matrix):
    print(matrix)
    listcompy7 = [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]
    return listcompy7
print(matrix_listcompy([[1,2,3,0],[4,5,6,0],[7,8,9,0]]))
