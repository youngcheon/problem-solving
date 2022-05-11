import re
answer= ''
for i in range(1,6):
    if re.findall('(FBI)',input()):
        answer+=str(i)+' '
print("HE GOT AWAY!" if not answer else answer.rstrip())