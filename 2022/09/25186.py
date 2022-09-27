input = __import__('sys').stdin.readline
N = int(input())
D = list(map(int, input().split()))
total = sum(D)


def solution():
    if(N == 1 and D[0] == 1):
        return 'Happy'
    for i in D:
        if total - i < i:
            return 'Unhappy'
    return 'Happy'


print(solution())
