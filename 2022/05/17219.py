input = __import__('sys').stdin.readline
n, m = map(int,input().split())
result = {}
for i in range(n):
    site, pw = input().split()
    result[site]=pw
for i in range(m):
    print(result[input().rstrip()])