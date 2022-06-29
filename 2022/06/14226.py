from collections import deque
n = int(input())

# x = 이모티콘 갯수, y = 시간 , z = 클립보드
# 연산 1 : 화면에 있는 이모티콘을 모두 복사해서 클립보드에 저장한다.
operation1 = lambda x,y,z: [x,y+1,x]
# 연산 2 : 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기 한다.
operation2 = lambda x,y,z: [x+z,y+1,z]
# 연산 3 : 화면에 있는 이모티콘중 하나를 삭제한다.
operation3 = lambda x,y,z: [x-1,y+1,z]

# 이모티콘 갯수와 클립보드 방문처리할 리스트
visited = [[0]*1001 for _ in range(1001)]
visited[1][0] = 1
q = deque() 
q.append([1,0,0])
while q:
    emoticon, seconds, clipboard = q.popleft()
    if emoticon == n:
        print(seconds)
        break
    
    # for문을 돌면서 연산 진행
    for i in [operation1, operation2, operation3]:
        n_emo, n_sec, n_clip = i(emoticon,seconds,clipboard)
        # 범위를 벗어나거나 방문 했으면 진행하지 않음.
        if 0<n_emo<=1000 and not visited[n_emo][n_clip]:
            q.append([n_emo,n_sec,n_clip])
            visited[n_emo][n_clip] = 1
        
