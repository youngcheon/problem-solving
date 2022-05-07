from heapq import heappop, heappush, heapify
n, m = map(int,input().split())
cards = list(map(int,input().split()))
heapify(cards)
for i in range(m):
    new = heappop(cards)+heappop(cards)
    exec("heappush(cards, new);"*2)
print(sum(cards))