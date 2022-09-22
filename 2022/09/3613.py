import re, sys
input = sys.stdin.readline
s = input().rstrip()
java = re.compile('[a-z]+([A-Z][a-z]*)*')
cpp = re.compile('[a-z]+(_[a-z]+)*')
if(java.fullmatch(s)):
    print(re.sub('[A-Z]([a-z]*)?',lambda x: '_'+x.group().lower(), s))
elif(cpp.fullmatch(s)):
    print(re.sub('_([a-z])', lambda x: x.group(1).upper(), s))
else:
    print('Error!')