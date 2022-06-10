def trans(S):
    ret= 0
    for e, i in enumerate(list(S)):
        ret += (ord(i)-65)*(26**(2-e))
    return ret

for _ in range(int(input())):
    s,n = input().split('-')
    print((abs(trans(s)-int(n))<=100)and"nice"or"not nice")