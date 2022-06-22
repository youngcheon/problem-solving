n = int(input())
array = list(range(1,n+1))
visited = [0] * len(array)
def dfs(depth, result):
    if depth == n:
        print(*result)
    else:
        for i in range(n):
            if not visited[i]:
                visited[i] = 1
                dfs(depth+1, result+[array[i]])
                visited[i] = 0
dfs(0, [])