import re
for _ in range(int(input())):
    answer = re.findall('^\s*\d+\s*$',input())
    print(answer and int(answer[0]) or 'invalid input')