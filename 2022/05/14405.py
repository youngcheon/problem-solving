import re
answer = re.fullmatch('(pi|ka|chu)+',input())
print('YES' if answer != None else 'NO')