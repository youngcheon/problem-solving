n, m = map(int, input().split())
cards = list(map(int, input().split()))
answer = 0
visited = [0]*n
def dfs(depth, result):
    global answer
    if depth == 3:
        answer = max(answer, result)
        if answer == m:
            print(m)
            exit(0)
    else:
        for i in range(n):
            if not visited[i] and result+cards[i] <= m:
                visited[i] = 1
                dfs(depth+1, result+cards[i])
                visited[i] = 0
dfs(0, 0)
print(answer)