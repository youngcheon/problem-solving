from collections import deque
input = __import__('sys').stdin.readline
n, m = map(int, input().split())
graph = [list(input().rstrip()) for _ in range(m)]
visited = [[0] * n for _ in range(m)]
dx, dy = [1,-1,0,0],[0,0,-1,1]

def bfs(x,y, color):
    count = 1 
    q = deque()
    q.append((x,y))
    visited[x][y] = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x+dx[i], y+dy[i]
            if 0<=nx<m and 0<=ny<n and color == graph[nx][ny] and not visited[nx][ny]:
                count += 1
                visited[nx][ny] = 1
                q.append((nx,ny))
    return count

white=0
black=0
for x in range(m):
    for y in range(n):
        if graph[x][y] == 'B' and not visited[x][y]:
            black += bfs(x,y,'B') ** 2
        elif graph[x][y] == 'W' and not visited[x][y]:
            white += bfs(x,y,'W') ** 2
print(white, black)
            