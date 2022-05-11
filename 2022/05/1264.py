input = __import__('sys').stdin.readline
import re
while True:
    s = input().rstrip()
    if s=='#':break
    print(len(re.findall('[aeiouAEIOU]',s)))