from collections import deque
a, b = map(int, input().split())
q = deque()
q.append([a, 1])
while q:
    number, count = q.popleft()
    if number > b:
        continue
    if number == b:
        print(count)
        exit(0)
    q.append([number*2, count+1])
    q.append([int(str(number)+'1'), count+1])
print(-1)
