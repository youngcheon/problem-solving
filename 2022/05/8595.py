import re
_=input()
print(sum(map(int, re.findall(r'\d+',input()))))