input = __import__('sys').stdin.readline
w, h = map(int, input().split())
p, q = map(int, input().split())
t = int(input())
q += t
p += t
lastP = w-(p % w) if p//w % 2 else p % w
lastQ = h-(q % h) if q//h % 2 else q % h
print(lastP, lastQ)
