input = __import__('sys').stdin.readline
K, L = map(int, input().split())
students = [input().rstrip() for _ in range(L)]
answer = list(dict.fromkeys(students[::-1]))[:-K-1:-1]
print("\n".join(answer))