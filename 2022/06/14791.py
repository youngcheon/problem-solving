def isTidy(n):
    return list(str(n)) == sorted(list(str(n)))

def check(number):
    if isTidy(number):
        return number
    length = len(str(number))
    for i in range(1,length):
        a, b = divmod(number,10**i)
        target = str(a-1)+'9'*len(str(b))
        if isTidy(target):
            return int(target)

t = int(input())
for i in range(1,t+1):
    number = int(input())
    print(f"Case #{i}:",check(number))