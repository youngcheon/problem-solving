import re
for _ in [0]*int(input()):
    try:print(re.search('Simon says(.*)',input()).group(1))
    except:pass
# exec("'Simon says'in(a:=input())and print(a[10:])\n"*int(input()))