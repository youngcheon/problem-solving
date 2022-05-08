input = __import__('sys').stdin.readline
n = int(input())
building = [int(input()) for _ in range(n)]
count = 0
stack = []
for i in range(n):
    while stack and stack[-1] <= building[i]:
        stack.pop()
    stack.append(building[i])
    count += len(stack)-1
print(count) 