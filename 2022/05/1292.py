a,b=map(int,input().split())
temp = []
for i in range(1, b):
    exec('temp.append(i);'*i)
print(temp)
print(sum(temp[a-1:b]))