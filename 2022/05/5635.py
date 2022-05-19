info=[input().split()for _ in [0]*int(input())]
info.sort(key=lambda x: [int(x[3]),int(x[2]),int(x[1])])
print(info[-1][0])
print(info[0][0])
#https://www.acmicpc.net/problem/5635