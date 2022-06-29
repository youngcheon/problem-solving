input = __import__('sys').stdin.readline
n = int(input())
sg = sorted(list(map(int, input().split())))
m = int(input())
array = list(map(int,input().split()))
for i in array:
    start, end = 0, n-1
    while start<=end:
        mid = (start+end)//2
        target = sg[mid]
        if target<i:
            start = mid+1
        elif target>i:
            end = mid-1
        else:
            break
    print((target==i)+0, end=' ')