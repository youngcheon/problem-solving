a,b=map(int,input().split())
temp = []
for i in range(1, b+1):
    exec('temp.append(i);'*i)
print(sum(temp[a-1:b]))