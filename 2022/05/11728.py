_ = input()
temp = []
for _ in range(2):
    temp.extend(list(map(int, input().split())))
print(' '.join(map(str,sorted(temp))))