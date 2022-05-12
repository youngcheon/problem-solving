import re
_=input()
s=input()
print(sum(map(int, re.findall(r'\d+',s))))