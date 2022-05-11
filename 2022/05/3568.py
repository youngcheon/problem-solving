import re
a,*b = input().split()
for i in b:
    t,*s=re.findall("\[\]|\&|\*|[\w]+",i)
    print(''.join([a,*s[::-1],' ',t,';']))