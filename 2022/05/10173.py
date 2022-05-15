import re
while 1:
    s=input()
    if s=='EOI':break
    print('Found' if re.findall('[N|n][E|e][M|m][O|o]',s) else 'Missing')