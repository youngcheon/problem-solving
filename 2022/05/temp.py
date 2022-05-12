import re
while 1:
    try :
        answer=re.findall('problem',input().lower())
        print('yes' if answer else 'no')
    except EOFError: break