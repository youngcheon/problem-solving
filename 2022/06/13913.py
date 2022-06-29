from collections import deque
input = __import__('sys').stdin.readline
n,k = map(int, input().split())
visited = [0]*100001
visited[n] = 1
q = deque()
q.append(n)

while q:
    s = q.popleft()
    if s == k:
        print(visited[s]-1)
        break
    for ns in (2*s, s-1, s+1):
        if 0<=ns<100001 and not visited[ns]:
            if ns == 2*s:
                visited[ns] = visited[s]
                q.appendleft(ns)
            else:
                visited[ns] = visited[s]+1
                q.append(ns)