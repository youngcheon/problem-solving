input = __import__('sys').stdin.readline


def find(x):
    if x == parents[x]:
        return x
    parents[x] = find(parents[x])
    return parents[x]


def union(x, y):
    x = find(x)
    y = find(y)
    if x != y:
        parents[y] = x
        relative[x] += relative[y]


answer = []
for _ in range(int(input())):
    f = int(input())
    parents = dict()
    relative = dict()
    for _ in range(f):
        a, b = input().split()
        if not a in parents:
            parents[a] = a
            relative[a] = 1
        if not b in parents:
            parents[b] = b
            relative[b] = 1
        union(a, b)
        answer.append(relative[find(a)])

print('\n'.join(map(str, answer)))
