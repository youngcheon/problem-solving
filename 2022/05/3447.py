s = open(0).read()
bug = 'BUG'
while bug in s:
    s = s.replace('BUG','')
print(s)