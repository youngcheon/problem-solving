from heapq import heappush, heappop
heap = []
for i in range(1,9):
    n = int(input())
    heappush(heap, (-n,i))
total=0
answer=[]
while len(heap)>3:
    score, index = heappop(heap)
    total-=score
    answer.append(index)
print(total)
print(*sorted(answer))