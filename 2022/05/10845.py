from collections import deque
input = __import__('sys').stdin.readline
q = deque()
for _ in range(int(input())):
    i = input().split()
    command = i[0]
    if command == 'push':
        q.append(i[1])
    elif command == 'pop':
        print(q.popleft() if q else -1)
    elif command == 'size':
        print(len(q))
    elif command == 'empty':
        print(0 if q else 1)
    elif command == 'front':
        print(q[0] if q else -1)
    else:
        print(q[-1] if q else -1)