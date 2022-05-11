import re
answer = []
for _ in range(int(input())):
    numbers = re.findall('\d+',input())
    answer.extend(list(map(int, numbers)))
print('\n'.join(map(str, sorted(answer))))