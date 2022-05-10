import os,io
input = io.BytesIO(os.read(0,os.fstat(0).st_size)).readline
t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    if n > 1:
        a[1] += b[0]
        b[1] += a[0]
        for i in range(2, n):
            a[i] += max(b[i-1],b[i-2])
            b[i] += max(a[i-1],a[i-2])
    print(max(a[-1],b[-1]))